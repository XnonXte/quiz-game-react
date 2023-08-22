import Header from "./Header";
import Badges from "./Badges";

interface TopBoardProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  questionText: string;
  category: string;
  difficulty: string;
  gameType: "boolean" | "multiple";
}

export default function TopBoard({
  currentQuestionIndex,
  totalQuestions,
  questionText,
  category,
  difficulty,
  gameType,
}: TopBoardProps) {
  return (
    <div className="d-flex flex-column gap-3 m-2">
      <Header
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
        questionText={questionText}
      />
      <Badges category={category} difficulty={difficulty} gameType={gameType} />
    </div>
  );
}
