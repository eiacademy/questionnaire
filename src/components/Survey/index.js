import React, { useState } from "react";

export function Survey() {

    const [ questionNumber, setQuestionNumber ] = useState(0);
    //these are the answers collected per page
    const [ pageAnswers, setPageAnswers ] = useState([]); 
    //these are the accumulated answers from pageAnswers to be submitted to the database
    const [ surveyAnswers, setSurveyAnswers ] = useState([]);

    //to be converted to a JSON file eventually
    const questionnaireQuestions = {
        questions: [
            {
                question: "Do you like fruits?"
            },
            {
                question: "Do you have any siblings?"
            },
            {
                question: "Do you play sports?"
            }
        ]
    }

    //triggers when you click next button. if answers have been selected, it will set surveyAnswers with pageAnswers and move on to the next page
    const nextClick = () => {
        if (pageAnswers.length !== 0) {
            setSurveyAnswers(prevState => [...prevState, pageAnswers]);
            setQuestionNumber(prevState => prevState + 1)
        }
    }

    return (
        <div className="container">
            <label>{questionnaireQuestions.questions[questionNumber]["question"]}</label>
            <input onChange={event => {setPageAnswers(event.target.value)}}></input>
            <button onClick={() => nextClick()}>Next</button>
        </div>
    );
}