import React from "react"
//import axios from "axios"
import { InputStyle } from "./style"

const SearchBar = () => {
    /*const [initRepos, setInitRepos] = React.useState([])
    const [repos, setRepos] = React.useState([])

    const url = 'https://api.deezer.com/search/album?q=';

    React.useEffect(() => {
        const fetchRepos = axios.get(url){
            console.log(fetchRepos)
        }
    },[])

    const handleChange = ({target}) => {
        target.value
    }
    */
    return (
        <>
            <InputStyle type="text" placeholder="Artista, música ou álbum" />
        </>
    )
}

export default SearchBar
