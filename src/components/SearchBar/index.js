import React from "react"
//import axios from "axios"
//import { FiSearch } from "react-icons/fi";
import { InputStyle } from "./style"

const SearchBar = () => {
    //const [initRepos, setInitRepos] = React.useState([])
    //const [repos, setRepos] = React.useState([])

    /*const url = 'https://api.deezer.com/search?q=eminem';

    React.useEffect(() => {
        axios.get(url)
            .then(res => console.log(res))
            .catch(error => console.log(error))
    },[])

    const handleChange = ({target}) => {
        if(!target.value) {
            return setRepos(initRepos)
        }

        const filterRepos = repos.filter(({name}) => name.includes(target.value))

        setRepos(filterRepos)
    }*/

    return (
        <>
            <InputStyle type="text" placeholder="Artista, música ou álbum" />
        </>
    )
}

export default SearchBar
