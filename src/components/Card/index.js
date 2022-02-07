import React from "react";
import { FiHeart, FiPlay, FiPause } from "react-icons/fi";
import { CardStyle, ImageStyle, ButtonStyle, DivTextStyle, TimePlayStyle, HeartStyle } from "./style";

const Card = () => {
    const play = <FiPlay />
    const pause = <FiPause />
    const [playPause, setPlayPause] = React.useState(play)

    const handleClick = () => {
        if(playPause === play){
            return setPlayPause(pause)
        } else {
            return setPlayPause(play)
        }
    }

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
                <HeartStyle>
                    <button>
                        <FiHeart />
                    </button>
                </HeartStyle>
                <TimePlayStyle>
                    <button onClick={ handleClick }>{ playPause }</button>
                    <p>00:00</p>
                </TimePlayStyle>
                <ButtonStyle>
                    <a href="https://www.deezer.com/br/" target="_blank" rel="noreferrer">
                        Ouvir no Deezer
                    </a>
                </ButtonStyle>
            </DivTextStyle>
        </CardStyle>
    )
}

export default Card
