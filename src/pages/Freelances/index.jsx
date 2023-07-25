import Card from '../../components/Card';
import styled from 'styled-components';

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
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
        <div>
            <h1>Freelance 👩‍💻👨‍💻</h1>

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
        </div>
    );
}

export default Freelances;
