interface BadgesProps {
  category: string;
  difficulty: string;
  gameType: "boolean" | "multiple";
}

export default function Badges({
  category,
  difficulty,
  gameType,
}: BadgesProps) {
  return (
    <div>
      <span className="bg-primary border border-light p-2 m-1 rounded">
        <p
          className="d-inline"
          dangerouslySetInnerHTML={{ __html: category }}
        ></p>
      </span>
      <span className="bg-info border border-light p-2 m-1 rounded">
        {gameType === "multiple" ? "Multiple Choice" : "True / False"}
      </span>
      <span
        className={`bg-${
          difficulty === "easy"
            ? "success"
            : difficulty === "medium"
            ? "warning"
            : "danger"
        } border border-light p-2 m-1 rounded`}
      >
        {difficulty[0].toUpperCase() + difficulty.slice(1, undefined)}
      </span>
    </div>
  );
}
