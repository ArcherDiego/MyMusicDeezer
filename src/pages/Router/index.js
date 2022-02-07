import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home"
import Favorito from "../Favoritos"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
            </Routes>
            <Routes>
                <Route path="favoritos" element={ <Favorito /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
