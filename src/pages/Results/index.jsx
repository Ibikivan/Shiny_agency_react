import { useContext } from "react";
import { AppContext } from "../../utils/context/index";
import { useFetch } from "../../utils/hooks";
import styled from 'styled-components';
import colors from "../../utils/style/colors";
import { StyledLink, StyledLoader } from "../../utils/style/Atom";
import ResultProfile from "../../components/ResultProfile";
import ComponentError from "../../components/ComponentError";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: ${colors.backgroundLight};
    align-items: center;
    justify-content: center;
    gap: 80px;
    margin: 65px;
    padding: 100px;
    min-height: 300px;
`

const StyledH1 = styled.h1`
    
    font-family: Comfortaa;
    font-size: 31px;
    font-weight: 700;
    width: 600px;
    span {
        color: ${colors.primary};
        font-family: Comfortaa;
        font-size: 31px;
        font-weight: 700;
        text-transform: capitalize;
    }
`

const ResultContainer = styled.div`
    width: 700px;
    display: grid;
    gap: 25px;
    grid-template-columns: 1fr;
`

function formatAnswers(answers) {
    const formated = Object.keys(answers);
    
    if (formated.length > 0) {
        return formated.reduce((acc, currentAnswer, index) => {
            const separator = index === 0 ? "" : "&";
            return `${acc}${separator}a${currentAnswer}=${answers[currentAnswer]}`;
        });
    } else {
        console.log("=== Format Error ===: no Answers !");
        return undefined;
    };
}

function profileTitle(results) {
    if (results) {
        const resultsTitles = results.reduce((acc, currentResult, index) => {
            const resultTitle = currentResult.title;
            const separator = index === 0 ? "" : ",";
            
            return `${acc}${separator} ${resultTitle}`;
        }, "");

        return resultsTitles;
    } else {
        console.log("=== Missing data to format resultTitle ===");
        return "";
    };
}

function Results() {
    const { answers } = useContext(AppContext);
    const url = `http://localhost:8000/results/?${formatAnswers(answers)}`;
    const { data, isLoading, error } = useFetch("Results", url)
    const { resultsData } = data;
    
    console.log("=== results ===", resultsData)

    return (
        <span>
            {error ? (
                <ComponentError
                    errorText="Une erreur est survenue !"
                />
            ) : (
                <span>
                    {isLoading ? (
                    <Container>
                        <StyledLoader />
                    </Container>
                ) : (
                    <Container>
                        <StyledH1>Les compétences dont vous avez besoin : <span>{ profileTitle(resultsData) }</span></StyledH1>

                        <StyledLink to='/freelances'>Découvrez nos profils</StyledLink>

                        <ResultContainer>
                            {resultsData ? resultsData.map((result, index) => (
                                <ResultProfile
                                    key={`${index}-${result.title}`}
                                    title={result.title}
                                    description={result.description}
                                />
                            )) : null}
                        </ResultContainer>
                    </Container>
                )}
                </span>
            )}
        </span>
    )
}

export default Results;
