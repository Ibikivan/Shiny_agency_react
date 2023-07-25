import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import lightLogo from '../../assets/dark-logo.png';

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 40px;
`

const StyledLink = styled(Link)`
    padding: 11px 30px;
    color: ${colors.secondary};
    text-decoration: none;
    ${(props) =>
        props.$isFullLink && `
            color: white;
            border-radius: 30px;
            background-color: ${colors.primary};
        `
    }
`

const StyledLogo = styled.img`
    width: 187px;
    height: 70px;
    flex-shrink: 0;
`

function Header() {
    return (
        <StyledNav>
            <StyledLogo src={lightLogo} alt="shiny logo" />

            <div>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>Questionnaire</StyledLink>
                <StyledLink to="/freelances">Freelances</StyledLink>
            </div>
        </StyledNav>
    )
}

export default Header;
