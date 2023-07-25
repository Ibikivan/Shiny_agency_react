import { Link } from "react-router-dom";
import homeIllustration from '../../assets/home-illustration.svg';
import styled from 'styled-components';
import colors from "../../utils/style/colors";

const StyledContainer = styled.div`
    background: #F9F9FC;
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

const StyledLink = styled(Link)`
    background-color: ${colors.primary};
    padding: 11px 30px;
    color: white;
    font-weight: 700;
    border-radius: 30px;
    text-decoration: none;
`

function Home() {
    return (
        <StyledContainer>
            <StyledAction>
                <StyledH1>Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents</StyledH1>

                <StyledLink to="/survey/1">Faire le test</StyledLink>
            </StyledAction>

            <div>
                <img src={homeIllustration} alt="Home illistration" />
            </div>
        </StyledContainer>
    )
}

export default Home;
