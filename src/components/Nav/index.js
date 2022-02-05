import NavStyle from "./style";
import Button from "../Button";

const Navigate = () => {
    return (
        <NavStyle>
            <li>
                <Button>Início</Button>
            </li>
            <li>
                <Button>Meus Favoritos</Button>
            </li>
        </NavStyle>
    )
}

export default Navigate
