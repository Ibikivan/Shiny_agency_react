import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import Freelances from '.';

const freelancesTestData = [
    {
        id: 1,
        name: "Harry Mc Guire",
        job: 'Front end',
        picture: ''
    },
    {
        id: 2,
        name: "Lucie Vanguard",
        job: 'UI/UX Design',
        picture: ''
    }
];

const server = setupServer(
    rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
        return res(ctx.json({ freelancersList: freelancesTestData }));
    })
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test("Should render without crash", async () => {
    render(
        <Freelances />
    )
    
    await waitForElementToBeRemoved(() => 
        screen.getByTestId('loader')
    );
    expect(screen.getByText("Harry Mc Guire")).toBeTruthy();
    expect(screen.findByText("Lucie Vanguard")).toBeTruthy();
});
