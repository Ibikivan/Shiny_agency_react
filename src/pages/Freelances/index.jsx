import Card from '../../components/Card';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { useState, useEffect } from 'react';
import { StyledLoader } from '../../utils/style/Atom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 90px;
`

const CardsContainer = styled.div`
    display: grid;
    gap: 70px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    margin: 45px;
`



const StyledH3 = styled.h3`
    text-align: center;
    margin: 50px;
    color: ${colors.secondary};
    font-weight: 700;
    line-height: 132.5%;
`

function Freelances() {
    const [profiles, setProfiles] = useState([]);
    const [error, setError] = useState(false);
    const [dataIsLoading, setDataIsLoading] = useState(false);

    useEffect(() => {
        async function profilesData() {
            setDataIsLoading(true);

            try {
                const response = await fetch('http://localhost:8000/freelances');
                const { freelancersList } = await response.json();
                setProfiles(freelancersList);
            } catch (error) {
                console.log("Profiles Error: ", error);
                setError(true);
            } finally {
                setDataIsLoading(false)
            }
        }

        profilesData();
    }, []);

    return (
        <Container>
            <h1>Trouvez votre prestataire</h1>

            {error ? (
                <StyledH3>Oops... Une erreur est survenue. Rééssayez!</StyledH3>
                ) : (
                <Container>
                    <StyledH3>Chez Shiny nous réunissons les meilleurs profils pour vous.</StyledH3>

                    {dataIsLoading ? (
                        <StyledLoader />
                    ) : (
                        <CardsContainer>
                            {profiles.map((profile) => (
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
