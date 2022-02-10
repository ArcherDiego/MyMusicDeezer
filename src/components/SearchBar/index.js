import React from "react"
import api from "../../api"
import { InputStyle } from "./style"

const SearchBar = () => {

    const [initRepos, setInitRepos] = React.useState([])
    const [repos, setRepos] = React.useState([])

    React.useEffect(() => {
        api.get('search?q=eminem')
            .then(res => {
                const data = res.data.data
                setInitRepos(data)
                setRepos(data)
                console.log(data)
            })
            .catch(error => console.log(error))
    },[])

    const handleChange = ({target}) => {
        if(!target.value) {
            return setRepos(initRepos)
        }

        const filterRepos = repos.filter((repos) => (
            repos.title.toLowerCase().includes(target.value.toLowerCase()) || 
            repos.artist.name.toLowerCase().includes(target.value.toLowerCase()) || 
            repos.album.title.toLowerCase().includes(target.value.toLowerCase())
        ))

        setRepos(filterRepos)
    }
    return (
        <>
            <InputStyle 
                type="text" 
                placeholder="Artista, música ou álbum" 
                onChange={ handleChange } 
            />  
        </>
    )
}

export default SearchBar
