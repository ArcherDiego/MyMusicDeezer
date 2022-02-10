import Navigate from "../Nav";
import { LogoStyle, HeaderStyle } from "./style";
import LogoImg from "../../images/logo.jpeg"

const Header = () => {
    return (
        <HeaderStyle>
            <LogoStyle src={ LogoImg } alt="Deezer's Logo" />
            <Navigate />
        </HeaderStyle>
    )
}

export default Header
