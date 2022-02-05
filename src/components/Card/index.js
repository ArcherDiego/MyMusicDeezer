import { CardStyle, ImageStyle, ButtonStyle } from "./style";

const Card = () => {
    return (
        <CardStyle>
            <div>
                <ImageStyle src="https://place-hold.it/100x100" alt="Capa do Álbum" />
            </div>
            <div>
                <h2>Música</h2>
                <p>Autor</p>
                <p>Duração</p>
            </div>
            <div>
                <img src="#" alt="Coração SVG" />
                <ButtonStyle>Ouvir no Deezer</ButtonStyle>
            </div>
        </CardStyle>
    )
}

export default Card
