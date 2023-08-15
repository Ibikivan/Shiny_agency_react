import { profileTitle, formatAnswers } from "./tools";

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
