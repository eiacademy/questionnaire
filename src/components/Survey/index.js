import React, { useState } from "react";

export function Survey() {

    const [ questionNumber, setQuestionNumber ] = useState(0);

    const [ state, setState ] = useState({
        fruits: "",
        fruitsType: "",
        siblings: "",
        siblingsNumber: "",
        sports: "",
        sportsType: ""
    })


    //to be converted to a JSON file eventually
    const questionnaireQuestions = {
        questions: [
            {
                title: "fruits",
                question: "Do you like fruits?",
                followUpQuestions:{
                    title: "fruitsType",
                    question:"What type of fruit do you like?"
                }
            },
            {   
                title: "siblings",
                question: "Do you have any siblings?",
                followUpQuestions:{
                    title: "siblingsNumber",
                    question: "How many siblings do you have?"
                }
            },
            {
                title: "sports",
                question: "Do you play sports?",
                followUpQuestions:{
                    title:"sportsType",
                    question:"What sports do you play?"
                }
            }
        ]
    }

    const onChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
      };

    //triggers when you click next button. if answers have been selected, it will set surveyAnswers with pageAnswers and move on to the next page
    const nextClick = () => {
        setQuestionNumber(prevState => prevState + 1)
    }

    return (
        <div className="container">
            <label>{questionnaireQuestions.questions[questionNumber]["question"]}</label>
            <input value={state[questionnaireQuestions.questions[questionNumber]["title"]]} name={questionnaireQuestions.questions[questionNumber]["title"]} onChange={onChange}></input>
            <input value={state[questionnaireQuestions.questions[questionNumber]["followUpQuestions"]["title"]]} name={questionnaireQuestions.questions[questionNumber]["followUpQuestions"]["title"]} onChange={onChange}></input>
            {questionNumber === (questionnaireQuestions.questions.length -1)
            ? <button>Submit</button> 
            : <button onClick={() => nextClick()}>Next</button>}
            {state.fruits}
            {state.fruitsType}
            {state.siblings}
            {state.siblingsNumber}
            {state.sports}
            {state.sportsType}
        </div>
    );
}