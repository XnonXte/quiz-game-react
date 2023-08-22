import StartingHeader from "./StartingHeader";
import StartingFooter from "./StartingFooter";
import StartingForm from "./StartingForm";
import StaringDesc from "./StartingDesc";

export default function StartingScreen({
  onCategory,
  onDifficulty,
  onGameStart,
  onGameType,
}) {
  return (
    <div className="container p-3 bg-dark text-light rounded-3 border border-primary">
      <div className="d-flex flex-column gap-2 p-2 m-1">
        <StartingHeader />
        <StaringDesc />
        <StartingForm
          onCategory={onCategory}
          onDifficulty={onDifficulty}
          onGameStart={onGameStart}
          onGameType={onGameType}
        />
        <StartingFooter />
      </div>
    </div>
  );
}
