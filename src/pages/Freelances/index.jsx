import Card from '../../components/Card';
import { StyledLoader } from '../../utils/style/Atom';
import { useFetch } from '../../utils/hooks';
import ComponentError from '../../components/ComponentError';
import { Container, CardsContainer, StyledH1, StyledH3 } from './style';

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
                        <StyledLoader data-testid="loader" />
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
