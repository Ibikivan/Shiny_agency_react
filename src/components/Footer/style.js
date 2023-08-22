import colors from "../../utils/style/colors";
import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 60px;
`

export const ModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.secondary};
`