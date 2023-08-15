export function formatAnswers(answers) {
    const formated = Object.keys(answers);
    
    if (formated.length > 0) {
        return formated.reduce((acc, currentAnswer, index) => {
            const separator = index === 0 ? "" : "&";
            return `${acc}${separator}a${currentAnswer}=${answers[currentAnswer]}`;
        }, '');
    } else {
        console.log("=== Format Error ===: no Answers !");
    };
}

export function profileTitle(results) {
    if (results) {
        return results.reduce((acc, currentResult, index) => {
            const resultTitle = currentResult.title;
            const separator = index === 0 ? "" : ",";
            
            return `${acc}${separator} ${resultTitle}`;
        }, '');
    } else {
        console.log("=== Missing data to format resultTitle ===");
        return "";
    };
}