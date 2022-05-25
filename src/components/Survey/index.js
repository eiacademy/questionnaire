import React, { useState } from "react";

export function Survey() {

    const [ questionNumber, setQuestionNumber ] = useState(0);

    //to be converted to a JSON file eventually
    const questionnaireQuestions = {
        questions: [
            {
                question: "Do you like fruits?"
            },
            {
                question: "Do you have any siblings?"
            }
        ]
    }

    return (
        <div className="container">
            <label>{questionnaireQuestions.questions[questionNumber]["question"]}</label>
            <button onClick={() => setQuestionNumber(prevState => prevState - 1)}>Previous</button>
            <button onClick={() => setQuestionNumber(prevState => prevState + 1)}>Next</button>
        </div>
    );
}
  