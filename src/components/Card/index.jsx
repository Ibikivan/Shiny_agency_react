import PropTypes from 'prop-types';
import styled from 'styled-components';
import DefaultPicture from '../../assets/profile.png'
import colors from '../../utils/style/colors';

const CardWrapper = styled.div`
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

const CardLabel = styled.span`
    color: ${colors.primary};
    font-size: 22px;
    font-weight: bold;
    margin: 0 30px;
`

const CardImage = styled.img`
    height: 148px;
    width: 148px;
    border-radius: 50%;
    margin: 0 auto;
`

const CardTitle = styled.span`
    text-align: center;
    font-size: 25px;
`

function Card({ label, title, picture }) {
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <CardTitle>{title}</CardTitle>
        </CardWrapper>
    );
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
}

Card.defaultProps = {
    label: "",
    title: "",
    picture: DefaultPicture
}

export default Card;
