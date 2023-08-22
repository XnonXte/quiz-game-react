interface ButtonsProps {
  answers: string[];
  onAnswer: (answer: string) => void;
}

export default function BottomBoard({ answers, onAnswer }: ButtonsProps) {
  return (
    <div className="d-flex flex-column gap-3 m-2">
      {answers.map((answer) => {
        return (
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => onAnswer(answer)}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
          </button>
        );
      })}
    </div>
  );
}
