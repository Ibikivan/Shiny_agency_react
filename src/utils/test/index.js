import { render as utilsRender } from "@testing-library/react";
import { AppProvider } from "../context";
import { MemoryRouter } from "react-router-dom";

function Wrapper({ children }) {
    return (
        <MemoryRouter>
            <AppProvider>
                { children }
            </AppProvider>
        </MemoryRouter>
    );
};

export function render(ui) {
    utilsRender(ui, { wrapper: Wrapper });
};
