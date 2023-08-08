import { createGlobalStyle } from "styled-components";
import { useTheme } from "../hooks";

const StyledGlobalStyle = createGlobalStyle`
    * {
        color: #2F2E41;
        text-align: center;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        font-family: Trebuchet MS, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    body {
        margin: 0;
        background-color: ${({ isDarkMode }) => (isDarkMode ? 'black' : 'white')};
    }
`

function GlobalStyle() {
    const { theme } = useTheme();

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle;
