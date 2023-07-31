import { useContext } from "react";
import { AppContext } from "../../utils/context/index";

function Results() {
    const { answers } = useContext(AppContext);

    console.log("results answers: ", answers);

    return (
        <div>
            <h1>Results</h1>
        </div>
    )
}

export default Results;
