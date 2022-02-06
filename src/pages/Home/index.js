import Header from "../../components/Header"
import Card from "../../components/Card"
import { HomeStyle, DivCardStyle } from "./style"

const Home = () => {
    return (
        <HomeStyle>
            <Header />
            <DivCardStyle>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </DivCardStyle>
        </HomeStyle>
    )
}

export default Home
