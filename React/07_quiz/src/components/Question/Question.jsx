import React from "react";
import css from "./Question.module.css";

function Question({ question, onAnswerChange }) {
  const handleSelectAnswer = (event) => {
    // Вызываем обратный вызов onAnswerChange и передаем ему выбранный ответ
    onAnswerChange(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className={css.question}>
      <h2>{question.question}</h2>
      <form>
        {question.answers.map((answer) => (
          <label key={answer.id}>
            <input
              type="radio"
              name="answer"
              value={answer.id}
              onChange={handleSelectAnswer}
            />
            {answer.text}
          </label>
        ))}
      </form>
    </div>
  );
}

export default Question;
