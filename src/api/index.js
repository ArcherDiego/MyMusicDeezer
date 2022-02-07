import axios from "axios"

const api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/api.deezer.com/',
    headers: {
        Authorization: 'fr9dgnITCSaqjT5SdINk2ViiQqXuuBEqVpmhQwUDnqwc6aLgp0D',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Content-Type': 'text/plain'
    }
})

export default api
