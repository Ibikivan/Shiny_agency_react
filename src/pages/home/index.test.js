import Home from "./Index";
import { screen } from "@testing-library/react";
import { render } from "../../utils/test";

describe('Home component testing', () => {
    test('Should it render without crash', async () => {
        render(<Home />);
    });

    test('Should render title', async () => {
        render(<Home />);
        expect(
            screen.getByRole('heading', {
                level: 1,
                name: "Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents"
            })
        ).toBeTruthy();
    });
});
