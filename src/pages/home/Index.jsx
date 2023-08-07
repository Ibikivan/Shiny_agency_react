import homeIllustration from '../../assets/home-illustration.svg';
import styled from 'styled-components';
import colors from "../../utils/style/colors";
import { StyledLink } from "../../utils/style/Atom";

const StyledContainer = styled.div`
    background: ${colors.backgroundLight};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 100px 60px;
    padding: 130px 90px;
    gap: 50px;
`

const StyledAction = styled.div`
    width: 550px;
`

const StyledH1 = styled.h1`
    font-size: 50px;
    font-weight: 700;
    line-height: 160.5%;
`

function Home() {
    return (
        <StyledContainer>
            <StyledAction>
                <StyledH1>Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents</StyledH1>

                <StyledLink to="/survey/1">Faire le test</StyledLink>
            </StyledAction>

            <img src={homeIllustration} alt="Home illistration" />
        </StyledContainer>
    )
}

export default Home;
