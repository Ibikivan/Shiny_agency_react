import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import styled from 'styled-components';
import colors from "../../utils/style/colors";
import { StyledLoader } from "../../utils/style/Atom";
import { AppContext } from "../../utils/context/index";

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
    const [questions, setQuestions] = useState({});
    const [dataIsLoading, setDataIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const { answers, handleAnswer } = useContext(AppContext);

    useEffect(() => {
        async function fetchSurveyData() {
            setDataIsLoading(true);
            
            try {
                const response = await fetch('http://localhost:8000/survey');
                const { surveyData } = await response.json();
                setQuestions(surveyData);
            } catch (error) {
                console.log("fecth Error: ", error);
                setError(true);
            } finally {
                setDataIsLoading(false);
            }
        };

        fetchSurveyData();
    }, []);
    
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
                    {dataIsLoading ? (
                        <StyledLoader />
                    ) : (
                        <p>{questions[parseInt(questionNumber)]}</p>
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

                        {parseInt(questionNumber) === Object.keys(questions).length ?
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
