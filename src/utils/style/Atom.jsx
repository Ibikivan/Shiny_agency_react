import colors from "./colors";
import styled, {keyframes} from 'styled-components';
import { Link } from "react-router-dom";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const StyledLoader = styled.div`
    padding: 10px;
    border: 6px solid ${colors.primary};
    border-bottom-color: transparent;
    border-radius: 22px;
    height: 0;
    width: 0;
    animation: ${rotate} 1s infinite linear;
`

export const StyledLink = styled(Link)`
    background-color: ${colors.primary};
    padding: 11px 30px;
    color: white;
    font-weight: 700;
    border-radius: 30px;
    text-decoration: none;
    transition: all 0.2s linear;
    &:hover {
        box-shadow: 0 0 4px black;
    }
`
