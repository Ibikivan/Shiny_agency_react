import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import lightLogo from '../../assets/dark-logo.png';
import darkLogo from '../../assets/light-logo.png';
import { useTheme } from '../../utils/hooks';

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
    font-weight: 700;
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
    const { theme } = useTheme();
    const logo = theme === "dark" ? darkLogo : lightLogo;

    return (
        <StyledNav>
            <Link to="/">
                <StyledLogo src={logo} alt="shiny logo" />
            </Link>

            <div>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
                <StyledLink to="/pfdviewer">Pdf</StyledLink>
                <StyledLink to="/survey/1">Faire le test</StyledLink>
                <StyledLink to="/dashboard" $isFullLink>Connexion</StyledLink>
            </div>
        </StyledNav>
    )
}

export default Header;
