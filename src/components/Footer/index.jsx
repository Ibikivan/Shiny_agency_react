import { useTheme } from "../../utils/hooks";
import { Container, ModeButton } from "./style";

function Footer() {
    const { theme, toggleTheme } = useTheme();

    function handleClick() {
        toggleTheme();
    }

    return (
        <Container>
            <ModeButton onClick={handleClick}>
                Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
            </ModeButton>
        </Container>
    )
}

export default Footer;
