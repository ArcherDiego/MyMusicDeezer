import React from "react";
import { FiHeart } from "react-icons/fi";
import { CardStyle, ImageStyle, ButtonStyle, DivTextStyle, TimePlayStyle, HeartStyle } from "./style";

const Card = ({ album, title, autor, audio, time, deezer }) => {
    return (
        <CardStyle>
            <div>
                <ImageStyle src={ album } alt="Capa do Álbum" />
            </div>
            <DivTextStyle>
                <div>
                    <h2>{ title }</h2>
                    <p>{ autor }</p>
                </div>
                <HeartStyle>
                    <button>
                        <FiHeart />
                    </button>
                </HeartStyle>
                <TimePlayStyle>
                    <audio controls>
                        <source src={ audio } type="audio/mp3" />
                    </audio>
                    <p>{`${(time-(time%60))/60}:${time%60}`}</p>
                </TimePlayStyle>
                <a href={ deezer } target="_blank" rel="noreferrer">
                    <ButtonStyle>
                    Ouvir no Deezer
                    </ButtonStyle>
                </a>
            </DivTextStyle>
        </CardStyle>
    )
}

export default Card
