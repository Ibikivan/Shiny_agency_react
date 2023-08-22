import styled from 'styled-components';
import colors from '../../utils/style/colors';

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 35px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #E2E3E9;
    }
`

export const CardLabel = styled.span`
    color: ${colors.primary};
    font-size: 22px;
    font-weight: bold;
    margin: 0 30px;
`

export const CardImage = styled.img`
    height: 148px;
    width: 148px;
    border-radius: 50%;
    margin: 0 auto;
`

export const CardTitle = styled.span`
    text-align: center;
    font-size: 25px;
`
