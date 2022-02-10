import React from "react"
import api from "../../api"
import Header from "../../components/Header"
import SearchBar from "../../components/SearchBar"
import Card from "../../components/Card"
import { HomeStyle, DivCardStyle, HeaderDivStyle } from "./style"

const Home = () => {

    const [value, setValue] = React.useState([])
    const [myFavorites, setMyFavorites] = React.useState([])

    React.useEffect(() => {
        api.get('search?q=daftpunk')
        .then(res => {
            const data = res.data.data
            setValue(data)
        })
        .catch(error => console.log(error))
    },[])
    
    return (
        <HomeStyle>
            <HeaderDivStyle>
                <Header />
                <SearchBar />
            </HeaderDivStyle>
            <DivCardStyle>
                {value.map((repo, index) => (
                    <Card
                        key={ index }
                        repo={ repo }
                        value={ myFavorites }
                        setValue={ setMyFavorites }
                        album={ repo.album.cover_medium }
                        title={ repo.title_short }
                        autor={ repo.artist.name } 
                        audio={ repo.preview }
                        time={ repo.duration }
                        deezer={ repo.link }
                    />
                ))}
            </DivCardStyle>
        </HomeStyle>
    )
}

export default Home
