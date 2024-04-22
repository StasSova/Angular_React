import React, { createContext, useContext, useState } from "react";

// Создаем контекст QuizContext
const QuizContext = createContext();

// Создаем провайдер для QuizContext
export const QuizProvider = ({ children }) => {
  // Стейт для хранения вопросов
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is the capital of France?",
      answers: [
        { id: 1, text: "London", isCorrect: false },
        { id: 2, text: "Berlin", isCorrect: false },
        { id: 3, text: "Paris", isCorrect: true },
        { id: 4, text: "Madrid", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "What is the largest planet in our solar system?",
      answers: [
        { id: 1, text: "Mars", isCorrect: false },
        { id: 2, text: "Earth", isCorrect: false },
        { id: 3, text: "Jupiter", isCorrect: true },
        { id: 4, text: "Saturn", isCorrect: false },
      ],
    },
    // Другие вопросы...
  ]);

  // Метод для получения вопроса по id
  const getQuestionById = (id) => {
    return questions.find((question) => question.id === id);
  };

  // Метод для проверки правильности ответа
  const checkAnswer = (questionId, answerId) => {
    const question = getQuestionById(questionId);
    // console.log("Question:", question);
    // console.log("Answer:", answerId);

    if (!question) {
      // console.log("Question not found");
      return false; // Если вопрос не найден, возвращаем false
    }

    const selectedAnswer = question.answers.find((a) => a.id === +answerId);
    // console.log("Selected answer:", selectedAnswer);

    if (!selectedAnswer) {
      // console.log("Selected answer not found");
      return false; // Если ответ не найден, возвращаем false
    }

    // console.log("Is correct:", selectedAnswer.isCorrect);
    return selectedAnswer.isCorrect;
  };

  return (
    <QuizContext.Provider value={{ questions, getQuestionById, checkAnswer }}>
      {children}
    </QuizContext.Provider>
  );
};

// Hook для использования QuizContext
export const useQuiz = () => {
  return useContext(QuizContext);
};
