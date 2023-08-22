import styled from 'styled-components';
import colors from '../../utils/style/colors';

export const StyledContainer = styled.div`
    background: ${colors.backgroundLight};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 100px 60px;
    padding: 130px 90px;
    gap: 50px;
`

export const StyledAction = styled.div`
    width: 550px;
`

export const StyledH1 = styled.h1`
    font-size: 50px;
    font-weight: 700;
    line-height: 160.5%;
`