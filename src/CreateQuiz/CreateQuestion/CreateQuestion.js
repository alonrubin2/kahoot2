import React, { useState, useEffect } from 'react';
import environment from '../../environments/index';
import './CreateQuestion.scss';

const CreateQuestion = () => {

    const [questionValue, setQuestionValue] = useState('');
    const [answerBody, setAnswerBody] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    // const [correctAnswer, setCorrectAnswer] = useState(isCorrect)
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


    // this function works, but in a delay of one click - why?
    const sortCorrectAnswer = (answer) => {
        let answerToBeChanged = answers[answer];
        answerToBeChanged.isCorrect = isCorrect;
    }

    async function submit(e) {
        e.preventDefault();
        const { answer1, answer2, answer3, answer4 } = answers;
        // const submitedAnswers = [answer1, answer2, answer3, answer4]
        const data = {
            question: questionValue,
            answers: answers
        }
        try {
            await fetch('http://localhost:4000/question', {
                method: 'PUT',
                body: data
            });
        }
        catch (err) {
            console.log(err)
        }
        // console.log(data);
        // console.log(questionValue);
        // console.log(answers);
    }


    useEffect(() => {
        setAnswers(answers)
    }, [answers]);



    return (
        <div className="CreateQuestion">

            <h1>Create Your Question</h1>


            <form className="create-question-form"
                onSubmit={(e) => submit(e)}
            >

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
                        <input className="checkbox" type="checkbox"
                            onClick={() => {
                                setIsCorrect(!isCorrect);
                                sortCorrectAnswer('answer2');
                            }} />
                    </div>
                </div>

                <div className="input-group">
                    <label>Answers 3</label>
                    <div className="inputs">
                        <input type="text"
                            onChange={(e) => sortAnswers('answer3', e.target.value)}
                            value={answers.answer3.body} />
                        <input className="checkbox" type="checkbox"
                            onClick={() => {
                                setIsCorrect(!isCorrect);
                                sortCorrectAnswer('answer3');
                            }} />
                    </div>

                </div>

                <div className="input-group">
                    <label>Answers 4</label>
                    <div className="inputs">
                        <input type="text"
                            onChange={(e) => sortAnswers('answer4', e.target.value)}
                            value={answers.answer4.body} />
                        <input className="checkbox" type="checkbox"
                            onClick={() => {
                                setIsCorrect(!isCorrect);
                                sortCorrectAnswer('answer4');
                            }} />
                    </div>
                </div>

                <button className="btn">Submit</button>
            </form>
            {/* {console.log(answers)} */}

        </div>
    );


}

export default CreateQuestion;
