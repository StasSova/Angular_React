import React, { useState } from "react";
import css from "./Quiz.module.css";
import { useQuiz } from "../../context/QuizContext";
import Question from "../Question/Question";

function Quiz() {
  const { questions, checkAnswer } = useQuiz();
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswerChange = (answerId) => {
    // Обновляем ответ пользователя при изменении
    setUserAnswers((prevAnswers) => [
      ...prevAnswers.filter(
        (answer) => answer.questionId !== questions[currentQuestionIndex].id
      ),
      {
        questionId: questions[currentQuestionIndex].id,
        answerId: answerId,
        isCorrect: checkAnswer(questions[currentQuestionIndex].id, answerId),
      },
    ]);
    console.log("User answers:", userAnswers);
  };

  const handleNextQuestion = () => {
    // Переходим к следующему вопросу
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleFinishQuiz = () => {
    console.log("User answers:", userAnswers);
    setIsQuizFinished(true);
  };

  // Получаем текущий вопрос
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className={css.quiz}>
      {!isQuizFinished && (
        <>
          {currentQuestion && (
            <Question
              question={currentQuestion}
              onAnswerChange={handleAnswerChange}
            />
          )}
          <div className={css.buttons}>
            {currentQuestionIndex < questions.length - 1 && (
              <button onClick={handleNextQuestion}>Next</button>
            )}
            {currentQuestionIndex === questions.length - 1 && (
              <button onClick={handleFinishQuiz}>Finish</button>
            )}
          </div>
        </>
      )}
      {isQuizFinished && (
        <>
          <h1>Quiz Results</h1>
          {questions.map((question) => (
            <div
              key={question.id}
              className={`${css.question} ${
                userAnswers.find((answer) => answer.questionId === question.id)
                  ?.isCorrect
                  ? css.correct
                  : css.error
              }`}
            >
              <h2>{question.question}</h2>
              <ul>
                {question.answers.map((answer) => {
                  console.log(answer);

                  const userAnswer = userAnswers.find(
                    (userAnswer) =>
                      userAnswer.questionId === question.id &&
                      userAnswer.answerId === answer.id
                  );

                  return (
                    <li
                      key={answer.id}
                      className={
                        userAnswer
                          ? userAnswer.isCorrect
                            ? css.correct
                            : css.error
                          : css.test
                      }
                    >
                      {answer.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Quiz;
