import React from "react"
import api from "../../api"
import Header from "../../components/Header"
import Card from "../../components/Card"
import { HomeStyle, DivCardStyle } from "./style"

const Home = () => {

    const [value, setValue] = React.useState([])

    React.useEffect(() => {
        api.get('search?q=eminem')
            .then(res => {
                const data = res.data.data
                setValue(data)
            })
            .catch(error => console.log(error))
    },[])
    
    return (
        <HomeStyle>
            <Header />
            <DivCardStyle>
                {value.map((repo, index) => (
                    <Card
                        key={ index } 
                        album={ repo.album.cover_big }
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
