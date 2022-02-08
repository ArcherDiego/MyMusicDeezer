import React from "react"
//import api from "../../api"
//import Card from "../Card"
//import { FiSearch } from "react-icons/fi";
import { InputStyle } from "./style"

const SearchBar = () => {
    /*const [initRepos, setInitRepos] = React.useState([])
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
            repos.title.includes(target.value) || 
            repos.artist.name.includes(target.value) || 
            repos.album.title.includes(target.value)
        ))

        setRepos(filterRepos)
    }
    {repos.map((repos, index) => (
        <Card 
            key={ index }
            album={ repos.album.cover }
            title={ repos.title_short }
            autor={ repos.artist.name } 
            audio={ repos.preview }
            time={ repos.duration }
            deezer={ repos.link }
        />
    ))}*/

    return (
        <>
            <InputStyle type="text" placeholder="Artista, música ou álbum" />
            
        </>
    )
}

export default SearchBar
