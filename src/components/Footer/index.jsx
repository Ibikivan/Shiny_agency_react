import colors from "../../utils/style/colors";
import styled from 'styled-components';
import { useContext } from "react";
import { ThemeContext } from "../../utils/context/index";

const Container = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 60px;
`

const ModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.secondary};
`

function Footer() {
    const { theme, toggleTheme } = useContext(ThemeContext);

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
