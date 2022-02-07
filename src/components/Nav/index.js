import { NavStyle, NavLinkButton} from "./style";
import Button from "../Button";

const Navigate = () => {
    return (
        <NavStyle>
            <NavLinkButton to="/" end>
                <Button>Início</Button>
            </NavLinkButton>
            <NavLinkButton to="/favoritos">
                <Button>Meus Favoritos</Button>
            </NavLinkButton>
        </NavStyle>
    )
}

export default Navigate
