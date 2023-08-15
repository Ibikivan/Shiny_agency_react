import styled from 'styled-components';
import colors from '../../utils/style/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: ${colors.backgroundLight};
    align-items: center;
    justify-content: center;
    gap: 80px;
    margin: 65px;
    padding: 100px;
    min-height: 300px;
`

export const StyledH1 = styled.h1`
    
    font-family: Comfortaa;
    font-size: 31px;
    font-weight: 700;
    width: 600px;
    span {
        color: ${colors.primary};
        font-family: Comfortaa;
        font-size: 31px;
        font-weight: 700;
        text-transform: capitalize;
    }
`

export const ResultContainer = styled.div`
    width: 700px;
    display: grid;
    gap: 25px;
    grid-template-columns: 1fr;
`