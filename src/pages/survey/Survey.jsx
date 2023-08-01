import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import styled from 'styled-components';
import colors from "../../utils/style/colors";
import { StyledLoader } from "../../utils/style/Atom";
import { AppContext } from "../../utils/context/index";
import { useFetch } from "../../utils/hooks";

const SurveyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items : center;
    margin: 160px;
    gap: 63px;
`

const StyledError = styled.p`
    margin: 300px;
    text-align: center;
    font-weight: 700px;
    font-size: 25px;
`

const StyledH1 = styled.h1`
    font-weight: 700px;
    font-size: 25px;
    text-decoration: underline;
    text-decoration-color: ${colors.primary};
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 42px;
`

const StyledButton = styled.button`
    border: solid ${colors.backgroundLight} 2px;
    background: ${colors.backgroundLight};
    width: 291px;{ keyframes } 
    height: 96px;
    border-radius: 31px;
    font-weight: 700px;
    font-size: 25px;
    &:hover {
        cursor: pointer;
        border: solid ${colors.primary} 2px;
    }
    box-shadow: ${({isSelected}) => isSelected ?
        `0 0 0 2px ${colors.primary} inset`: 'none'
    };
    &:first-child {
        margin-right: 15px;
    }
    &:last-of-type {
        margin-left: 15px
    }
    transition: all 0.2s linear
`

const PrevNext = styled.div`
    display: flex;
    flex-direction: row;
    gap: 73px;
`

function Survey() {
    const url = 'http://localhost:8000/survey';
    const { data, isLoading, error } = useFetch("Survey", url);
    const { surveyData } = data;
    const { answers, handleAnswer } = useContext(AppContext);
    
    const { questionNumber } = useParams();
    const nextQuestion = parseInt(questionNumber) + 1;
    const previousQuestion = parseInt(questionNumber) > 1
    ? parseInt(questionNumber) - 1
    : 1;

    function isSurveyCompleted(event) {
        if (Object.keys(answers).length !== parseInt(questionNumber)) {
            event.preventDefault();
            alert("Veuillez répondre à toutes les question avant de poursuive !")
        }
    }

    return(
        <span>
            {error
            ? (<StyledError>Oops... une erreur est survenue !</StyledError>)
            : (
                <SurveyWrapper>
                    <StyledH1>Question {questionNumber}</StyledH1>
                    {isLoading ? (
                        <StyledLoader />
                    ) : (
                        <p>{surveyData && surveyData[parseInt(questionNumber)]}</p>
                    )}

                    <ButtonContainer>
                        <StyledButton
                            onClick={() => handleAnswer(true, questionNumber)}
                            isSelected={answers[questionNumber] === true}
                            >
                            Oui
                        </StyledButton>
                        <StyledButton
                            onClick={() => handleAnswer(false, questionNumber)}
                            isSelected={answers[questionNumber] === false}
                        >
                            Non
                        </StyledButton>
                    </ButtonContainer>

                    <PrevNext>
                        <Link to={`/survey/${previousQuestion}`} >
                            Précédente
                        </Link>

                        {surveyData && parseInt(questionNumber) === Object.keys(surveyData).length ?
                            (
                                <Link to='/results' onClick={(event) => isSurveyCompleted(event)}>Résultats</Link>
                            ) : (
                                <Link to={`/survey/${nextQuestion}`}>
                                    Suivante
                                </Link>
                            )
                        }
                    </PrevNext>
                </SurveyWrapper>
            )}
        </span>
    )
}

export default Survey;
