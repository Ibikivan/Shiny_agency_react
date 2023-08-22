import colors from "../../utils/style/colors";
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 90px;
`

export const CardsContainer = styled.div`
    display: grid;
    gap: 70px;
    grid-auto-rows: 350px;
    grid-template-columns: repeat(2, 1fr);
    margin: 45px;
`

export const StyledH1 = styled.h1`
    font-size: 30px;
    font-weight: 700;
    line-height: 132.5%;
`

export const StyledH3 = styled.h3`
    text-align: center;
    margin: 50px;
    color: ${colors.secondary};
    font-weight: 700;
    line-height: 132.5%;
`
