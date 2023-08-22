interface EndingScreenProps {
  correctCount: number;
  questionsLength: number;
  onRestart: () => void;
}

export default function EndingScreen({
  correctCount,
  questionsLength,
  onRestart,
}: EndingScreenProps) {
  return (
    <div className="container p-3 bg-dark text-light border border-primary rounded-3">
      <div className="p-2 m-1 d-flex flex-column justify-content-center align-items-center gap-2">
        <h1>Finished</h1>
        <h2>
          You scored {correctCount} out of {questionsLength}
        </h2>
        <div>
          <button type="button" className="btn btn-danger" onClick={onRestart}>
            Restart Game
          </button>
        </div>
      </div>
    </div>
  );
}
