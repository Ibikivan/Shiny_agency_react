import homeIllustration from '../../assets/home-illustration.svg';
import { StyledLink } from "../../utils/style/Atom";
import { StyledContainer, StyledAction, StyledH1 } from './style';

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
