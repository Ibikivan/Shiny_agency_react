import colors from "../../utils/style/colors";
import styled from "styled-components";

const StyledTitle = styled.p`
    text-align: left;
    color: ${colors.primary};
    font-weight: 700;
    line-height: 132.5%;
    text-transform: capitalize;
` 
const StyledP = styled.p`
    text-align: left;
    color: #8186A0;
    line-height: 132.5%;
`

function ResultProfile({ title, description }) {

    return (
        <div>
            <StyledTitle>{title}</StyledTitle>
            <StyledP>{description}</StyledP>
        </div>
    )
}

export default ResultProfile;
