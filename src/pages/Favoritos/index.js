import Header from "../../components/Header"
import Card from "../../components/Card"
import { FavoritoStyle, DivCardStyle } from "./style";

const Favorito = () => {
    return (
        <FavoritoStyle>
            <Header />
            <DivCardStyle>
                <Card />
                <Card />
                <Card />
            </DivCardStyle>
        </FavoritoStyle>
    )
}

export default Favorito
