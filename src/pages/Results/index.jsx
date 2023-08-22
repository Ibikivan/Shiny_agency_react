import { useContext } from "react";
import { AppContext } from "../../utils/context/index";
import { useFetch } from "../../utils/hooks";
import { StyledLink, StyledLoader } from "../../utils/style/Atom";
import ResultProfile from "../../components/ResultProfile";
import ComponentError from "../../components/ComponentError";
import { Container, StyledH1, ResultContainer } from "./style";
import { formatAnswers, profileTitle } from "./tools";

function Results() {
    const { answers } = useContext(AppContext);
    const url = `http://localhost:8000/results/?${formatAnswers(answers)}`;
    const { data, isLoading, error } = useFetch("Results", url)
    const { resultsData } = data;

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
                        <StyledLoader data-testid="loader" />
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
