import styled from 'styled-components';
import colors from '../../utils/style/colors';
import error from '../../assets/404.svg';
import PropTypes from 'prop-types'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.backgroundLight};
    min-height: 300px;
    justify-content: center;
    align-items: center;
    margin: 70px;
    padding: 50px;
`

const StyledImg = styled.img`
    width: 300px;
    height: 300px;
`

function ComponentError({ errorText }) {

    return (
        <Container>
            <p>Oop's</p>
            <StyledImg src={error} alt="Error background" />
            <p>{errorText}</p>
        </Container>
    )
}

ComponentError.propType = {
    errorText: PropTypes.string.isRequired
}

ComponentError.defaultProps = {
    errorText: "Une erreur est survenue !"
}

export default ComponentError;
