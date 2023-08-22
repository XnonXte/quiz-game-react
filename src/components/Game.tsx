// Copyright 2023 XnonXte
// This is my second project ever with React, mind the incompleteness.
// But overall I'm pretty satisfied with the result.

// Several improvement ideas:
// 1. Restyle everything so it doesn't look too bootstrapy.
// 2. Center the container.
// 2. Add a history system.
// 3. Add a timer?

import { useState } from "react";
import StartingScreen from "./StartingScreen";
import Quiz from "./Quiz";
import EndingScreen from "./EndingScreen";

export default function Game() {
  const [gameRunning, setGameRunning] = useState(false);
  const [gameEnding, setGameEnding] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [gameType, setGameType] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  async function handleGameStart() {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=${gameType}`
    );
    const data = await response.json();

    setQuestions(() => data.results);
    setCurrentQuestion(() => data.results[0]);
    setGameRunning(() => true);
  }

  function handleAnswer(answer: string) {
    if (answer === currentQuestion.correct_answer) {
      setCorrectCount(() => correctCount + 1);
    }

    showNextQuestion();
  }

  function showNextQuestion() {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex > questions.length - 1) {
      setGameEnding(() => true);
    } else {
      setCurrentQuestion(() => questions[nextQuestionIndex]);
      setCurrentQuestionIndex(() => nextQuestionIndex);
    }
  }

  function handleRestart() {
    setQuestions(() => []);
    setCurrentQuestion(() => null);
    setCurrentQuestionIndex(() => 0);
    setGameEnding(() => false);
    setGameRunning(() => false);
  }

  if (gameRunning && !gameEnding) {
    return (
      <div className="container p-3 bg-dark text-light border border-primary rounded-3">
        <Quiz
          question={currentQuestion}
          questionIndex={currentQuestionIndex}
          questionsLength={questions.length}
          onAnswer={handleAnswer}
        />
      </div>
    );
  } else if (gameEnding) {
    return (
      <EndingScreen
        correctCount={correctCount}
        onRestart={handleRestart}
        questionsLength={questions.length}
      />
    );
  } else {
    return (
      <StartingScreen
        onCategory={setCategory}
        onDifficulty={setDifficulty}
        onGameStart={handleGameStart}
        onGameType={setGameType}
      />
    );
  }
}
