import Navigate from "../Nav";
import SearchBar from "../SearchBar";
import { LogoStyle, HeaderStyle } from "./style";
import LogoImg from "../../images/logo.jpeg"

const Header = () => {
    return (
        <HeaderStyle>
            <div>
                <LogoStyle src={ LogoImg } alt="Deezer's Logo" />
                <Navigate />
            </div>
            <SearchBar />
        </HeaderStyle>
    )
}

export default Header
