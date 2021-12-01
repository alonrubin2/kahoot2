import React, { useState, useEffect } from "react";
import environment from "../../environments/index";
import "./CreateQuestion.scss";

const CreateQuestion = () => {
  const [value, setValue] = useState("");
  const [questionValue, setQuestionValue] = useState("");
  const [answers, setAnswers] = useState([
    { body: "", isCorrect: false, id: "" },
    { body: "", isCorrect: false, id: "" },
    { body: "", isCorrect: false, id: "" },
    { body: "", isCorrect: false, id: "" },
  ]);

  const sortAnswers = (answerIndex, value) => {
    let answerToBeChanged = answers[answerIndex];
    setValue((answerToBeChanged.body = value));
    answerToBeChanged.id = answerToBeChanged.body.hashCode();
  };

  const sortCorrectAnswer = (answerIndex) => {
    let answerToBeChanged = answers[answerIndex];
    answerToBeChanged.isCorrect = !answerToBeChanged.isCorrect;
  };

  async function submit(e) {
    e.preventDefault();
    const data = {
      question: questionValue,
      answers: answers,
    };
    console.log(data);
    try {
      const res = await fetch(environment.apiUrl + "/create-question", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="CreateQuestion">
      <h1>Create Your Question</h1>

      <form className="create-question-form" onSubmit={(e) => submit(e)}>
        <div className="input-group">
          <label>Question</label>
          <input
            type="text"
            onChange={(e) => setQuestionValue(e.target.value)}
            value={questionValue}
          />
        </div>

        {answers.map((answer, index) => {
          return (
            <div className="input-group">
              <label>Answer {index + 1}</label>
              <div className="inputs">
                <input
                  type="text"
                  onChange={(e) => sortAnswers(index, e.target.value)}
                  value={answers[index].body}
                  name={`Answer ${index + 1}`}
                />
                <input
                  className="checkbox"
                  type="checkbox"
                  onClick={() => {
                    sortCorrectAnswer(index);
                  }}
                />
              </div>
            </div>
          );
        })}

        <button className="btn" onClick={submit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateQuestion;
