import { CardStyle, ImageStyle, ButtonStyle, DivTextStyle, PlayButtonStyle } from "./style";

const Card = () => {
    return (
        <CardStyle>
            <div>
                <ImageStyle src="https://place-hold.it/210x210" alt="Capa do Álbum" />
            </div>
            <DivTextStyle>
                <div>
                    <h2>Música</h2>
                    <p>Autor</p>
                </div>
                <img src="#" alt="Coração SVG" />
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <PlayButtonStyle>Play</PlayButtonStyle>
                    <p>Duração</p>
                </div>
                <ButtonStyle>Ouvir no Deezer</ButtonStyle>
            </DivTextStyle>
        </CardStyle>
    )
}

export default Card
