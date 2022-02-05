import Header from "../../components/Header"
import Card from "../../components/Card"
import HomeStyle from "./style"

const Home = () => {
    return (
        <HomeStyle>
            <Header />
            <div>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </HomeStyle>
    )
}

export default Home
