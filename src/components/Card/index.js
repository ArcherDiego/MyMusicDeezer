import React from "react";
import { FiHeart } from "react-icons/fi";
import { CardStyle, ImageStyle, ButtonStyle, DivTextStyle, TimePlayStyle, HeartStyle, DeezerStyle } from "./style";

const Card = ({ album, title, autor, audio, time, deezer, repo, value, setValue }) => {
    
    const timer = new Date(0, 0, 0)
    timer.setSeconds(time)
    const sec = String(timer.getSeconds()).length === 1 ? '0' + String(timer.getSeconds()) : timer.getSeconds()
    const min = String(timer.getMinutes()).length === 1 ? '0' + String(timer.getMinutes()) : timer.getMinutes()
    
    const handleClick = () => {
        if(value.length === 0) {
            return setValue((oldState) => [...oldState, repo])
        }
        if(value.find((item) => item.id === repo.id)){
            const updateValue = value.map((item) => ({...item}))
            const newArray = updateValue.filter((item) => item.id !== repo.id)
            return setValue(newArray)
        } else {
            setValue((oldState) => [...oldState, repo])
        }
    }

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
                    <button onClick={ handleClick }>
                        {(value.find((item) => item.id === repo.id)) ? <FiHeart fill="#FF5858" /> : <FiHeart />}
                    </button>
                </HeartStyle>
                <TimePlayStyle>
                    <audio controls>
                        <source src={ audio } type="audio/mp3" />
                    </audio>
                    <p>{`${min}:${sec}`}</p>
                </TimePlayStyle>
                <DeezerStyle>
                    <a href={ deezer } target="_blank" rel="noreferrer">
                        <ButtonStyle>
                            Ouvir no Deezer
                        </ButtonStyle>
                    </a>
                </DeezerStyle>
            </DivTextStyle>
        </CardStyle>
    )
}

export default Card
