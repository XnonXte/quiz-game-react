import TopBoard from "./TopBoard";
import BottomBoard from "./BottomBoard";

type Question = {
  category: string;
  type: "multiple" | "boolean";
  difficulty: "easy" | "medium" | "hard";
  question: string;
  correct_answer: string;
  incorrect_answers: [string, string, string];
};

interface QuizProps {
  question: Question;
  questionIndex: number;
  questionsLength: number;
  onAnswer: (answer: string) => void;
}

export default function Quiz({
  question,
  questionIndex,
  questionsLength,
  onAnswer,
}: QuizProps) {
  function shuffleAnswers(array: string[]) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  return (
    <div className="d-flex flex-column gap-2">
      <TopBoard
        category={question.category}
        currentQuestionIndex={questionIndex}
        difficulty={question.difficulty}
        questionText={question.question}
        totalQuestions={questionsLength}
        gameType={question.type}
      />
      <BottomBoard
        answers={shuffleAnswers([
          ...question.incorrect_answers,
          question.correct_answer,
        ])}
        onAnswer={onAnswer}
      />
    </div>
  );
}
