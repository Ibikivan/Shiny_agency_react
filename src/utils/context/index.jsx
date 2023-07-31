import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [theme, setTheme] = useState('light');
    const [answers, setAnswers] = useState({});
    
    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    
    function handleAnswer(choice, number) {
        const answered = parseInt(number);

        const currentChoice = {[answered] : choice};
    
        setAnswers({ ...answers, ...currentChoice });
    };

    return (
        <AppContext.Provider
            value={{
                theme,
                toggleTheme,
                answers,
                handleAnswer
            }}
        >
            { children }
        </AppContext.Provider>
    )
}
