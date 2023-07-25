import styled from 'styled-components';
import back404 from '../../assets/404.svg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #F9F9FC; 
    margin: 90px;
    padding: 100px;
    gap: 50px;
`

const StyledP = styled.p`
    font-size: 31px;
    font-weight: 700;
    line-height: normal;
`

function Error() {
    return (
        <Container>
            <h1>Oups...</h1>
            <img src={back404} alt="Error page background" />
            <StyledP>Il semblerait qu’il y ait un problème</StyledP>
        </Container>
    )
}

export default Error;
