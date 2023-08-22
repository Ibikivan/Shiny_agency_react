import { profileTitle, formatAnswers } from "./tools";
import Results from ".";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { render } from "../../utils/test";

const testAnswertData = {
    1: true,
    2: false,
    3: true
};

const testResultData = [
    {
        title: 'frontend',
        description: 'Le frontend gère se qui est visible'
    },
    {
        title: 'backend',
        description: 'Le backend gère se qui est API'
    },
    {
        title: 'UI/UX Design',
        description: 'Le UI/UX se rassure de la bonne expérience utilisateur'
    }
]

const server = setupServer(
    rest.get(`http://localhost:8000/results/`, (req, res, ctx) => {
        return res(ctx.json({ resultsData: testResultData }));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Result acquistion and traitment", () => {
    it("Jobs titles test", () => {
        const awaitedList = [
            {
                title: 'firstJob'
            },
            {
                title: 'secondJob'
            }
        ];
        const expectedString = " firstJob, secondJob";
        
        expect(profileTitle(awaitedList)).toEqual(expectedString);
    });
    
    it("answer formatage test", () => {
        const awaitedObject = {
            1: true,
            2: false
        };
        const expectedParams = "a1=true&a2=false";
    
        expect(formatAnswers(awaitedObject)).toEqual(expectedParams);
    });
});

describe("Result component testing", () => {
    test("Should it render proporly", async () => {
        render(<Results />)

        await waitForElementToBeRemoved(screen.getByTestId("loader"));
        expect(screen.getByText("frontend")).toBeTruthy();
        expect(screen.getByText("Le frontend gère se qui est visible")).toBeTruthy();
    });
});
