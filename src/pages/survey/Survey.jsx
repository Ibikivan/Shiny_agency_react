import { Link, useParams } from "react-router-dom";

function Survey() {
    const { questionNumber } = useParams();
    const nextQuestion = parseInt(questionNumber) + 1;
    const previousQuestion = parseInt(questionNumber) > 1
    ? parseInt(questionNumber) - 1
    : 1;

    return(
    <div>
        <h1>Questionnaire 🧮</h1>
        <h2>Question {questionNumber}</h2>

        <div>
            <Link to={`/survey/${previousQuestion}`} >
                Précedent
            </Link>

            {questionNumber === '10' ?
                (
                    <Link to='/results'>Résultats</Link>
                ) : (
                    <Link to={`/survey/${nextQuestion}`}>
                        Suivant
                    </Link>
                )
            }
        </div>
    </div>
    )
}

export default Survey;
