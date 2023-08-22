interface HeaderProps {
  questionText: string;
  currentQuestionIndex: number;
  totalQuestions: number;
}

export default function Header({
  questionText,
  currentQuestionIndex,
  totalQuestions,
}: HeaderProps) {
  return (
    <div>
      <h1>Question {`${currentQuestionIndex + 1}/${totalQuestions}`}</h1>
      <h4 dangerouslySetInnerHTML={{ __html: questionText }}></h4>
    </div>
  );
}
