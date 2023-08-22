import Card from ".";
import { render, screen, fireEvent } from "@testing-library/react";
import TestImage from '../../assets/profile.png';

describe('Testing Card component', () => {
    const label = "label";
    const title = "title";
    const staredtitle = `⭐️ ${title} ⭐️`;

    test('Should image and text is render properlly', async () => {
        render(
            <Card
                label={label}
                picture={TestImage}
                title={title}
            />
        )

        const testLabel = screen.getByText(label);
        const testTitle = screen.getByText(title)

        expect(
            screen.getByRole('img', {
                name: 'freelance'
            }).getAttribute('src')
        ).toBe(TestImage);

        expect(testTitle).toBeTruthy();
        expect(testLabel).toBeTruthy();
    });

    test('Should title change properly', async () => {
        render(
            <Card
                title={title}
            />
        )
        
        const testTitle = screen.getByText(title);
        expect(testTitle).toBeTruthy();
        
        const cibledElement = testTitle.closest("div");
        fireEvent.click(cibledElement);

        const startedTestTitle = screen.getByText(staredtitle);
        expect(startedTestTitle).toBeTruthy();
    });
});
