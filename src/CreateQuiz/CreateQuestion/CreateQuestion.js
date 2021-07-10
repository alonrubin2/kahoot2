import React, { useState } from 'react';
import './CreateQuestion.scss';

const CreateQuestion = () => {

    const [questionValue, setQuestionValue] = useState('');
    const [answerBody, setAnswerBody] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(isCorrect)
    const [answers, setAnswers] = useState({
        answer1: {
            body: answerBody,
            isCorrect: isCorrect
        },
        answer2: {
            body: answerBody,
            isCorrect: isCorrect
        },
        answer3: {
            body: answerBody,
            isCorrect: isCorrect
        },
        answer4: {
            body: answerBody,
            isCorrect: isCorrect
        },
    });

    const sortAnswers = (answer, value) => {
        let answerToBeChanged = answers[answer];
        setAnswerBody(answerToBeChanged.body = value);
    }

    const sortCorrectAnswer = (answer) => {
        let answerToBeChanged = answers[answer];
        setCorrectAnswer(answerToBeChanged.isCorrect = isCorrect)
    }

    console.log(answers);
    // console.log(isCorrect)



    return (
        <div className="CreateQuestion">

            <h1>Create Your Question</h1>


            <form className="create-question-form">

                <div className="input-group">
                    <label>Question</label>
                    <input type="text"
                        onChange={(e) => setQuestionValue(e.target.value)}
                        value={questionValue} />
                </div>

                <div className="input-group">
                    <label>Answer 1</label>
                    <div className="inputs">
                    <input type="text"
                        onChange={(e) => sortAnswers('answer1', e.target.value)}
                        value={answers.answer1.body} />
                    <input className="checkbox" type="checkbox" 
                    onClick={() => {
                        setIsCorrect(!isCorrect);
                        sortCorrectAnswer('answer1');
                    }}
                    />
                    </div>
                </div>

                <div className="input-group">
                    <label>Answers 2</label>
                    <div className="inputs">
                    <input type="text"
                        onChange={(e) => sortAnswers('answer2', e.target.value)}
                        value={answers.answer2.body} />
                    <input className="checkbox" type="checkbox" />
                    </div>
                </div>

                <div className="input-group">
                    <label>Answers 3</label>
                    <div className="inputs">
                        <input type="text"
                            onChange={(e) => sortAnswers('answer3', e.target.value)}
                            value={answers.answer3.body} />
                        <input className="checkbox" type="checkbox" />
                    </div>

                </div>

                <div className="input-group">
                    <label>Answers 4</label>
                    <div className="inputs">
                    <input type="text"
                        onChange={(e) => sortAnswers('answer4', e.target.value)}
                        value={answers.answer4.body} />
                    <input className="checkbox" type="checkbox" />
                    </div>
                </div>

            </form>
        </div>
    );


}

export default CreateQuestion;
