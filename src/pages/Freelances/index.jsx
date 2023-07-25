import Card from '../../components/Card';
import styled from 'styled-components';

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
    margin: 50px;
    color: #8186A0;
    font-weight: 700;
    line-height: 132.5%;
`

const freelanceProfiles = [
    {
        id: '1eb',
        name: 'jane Doe',
        jobTitle: 'Devops',
    },
    {
        id: '2eb',
        name: 'john Doe',
        jobTitle: 'Développeur frontent',
    },
    {
        id: '3eb',
        name: 'jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
    }
];

function Freelances() {
    return (
        <Container>
            <h1>Trouvez votre prestataire</h1>

            <StyledH3>Chez Shiny nous réunissons les meilleurs profils pour vous.</StyledH3>

            <CardsContainer>
                {freelanceProfiles.map((profile) => (
                    <Card 
                        key={profile.id}
                        label={profile.jobTitle}
                        picture={profile.picture}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
        </Container>
    );
}

export default Freelances;
