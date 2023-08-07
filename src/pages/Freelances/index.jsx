import Card from '../../components/Card';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { StyledLoader } from '../../utils/style/Atom';
import { useFetch } from '../../utils/hooks';
import ComponentError from '../../components/ComponentError';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 90px;
`

const CardsContainer = styled.div`
    display: grid;
    gap: 70px;
    grid-auto-rows: 350px;
    grid-template-columns: repeat(2, 1fr);
    margin: 45px;
`

const StyledH1 = styled.h1`
    font-size: 30px;
    font-weight: 700;
    line-height: 132.5%;
`

const StyledH3 = styled.h3`
    text-align: center;
    margin: 50px;
    color: ${colors.secondary};
    font-weight: 700;
    line-height: 132.5%;
`

function Freelances() {
    const url = 'http://localhost:8000/freelances';
    const { data, isLoading, error } = useFetch("Freelance", url);
    const { freelancersList } = data;

    return (
        <Container>
            <StyledH1>Trouvez votre prestataire</StyledH1>

            {error ? (
                    <ComponentError
                        errorText="Une erreur est survenue. Rééssayez!"
                    />
                ) : (
                <Container>
                    <StyledH3>Chez Shiny nous réunissons les meilleurs profils pour vous.</StyledH3>

                    {isLoading ? (
                        <StyledLoader />
                    ) : (
                        <CardsContainer>
                            {freelancersList.map((profile) => (
                                <Card 
                                    key={profile.id}
                                    label={profile.job}
                                    picture={profile.picture}
                                    title={profile.name}
                                />
                            ))}
                        </CardsContainer>
                    )}
                </Container>
            )}
        </Container>
    );
}

export default Freelances;
