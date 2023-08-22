import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/profile.png'
import { CardWrapper, CardLabel, CardImage, CardTitle } from './style';
import { useState } from 'react';

function Card({ label, title, picture }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const start = isFavorite ? "⭐️" : "";

    return (
        <CardWrapper
            onClick={() => {
                isFavorite
                ? setIsFavorite(false)
                : setIsFavorite(true)
            }}
        >
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <CardTitle>{start} {title} {start}</CardTitle>
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
