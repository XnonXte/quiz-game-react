export default function StartingForm({
  onCategory,
  onDifficulty,
  onGameStart,
  onGameType,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onGameStart();
      }}
      className="d-flex flex-column gap-3"
    >
      <div>
        <label htmlFor="category" className="form-label">
          Select Category
        </label>
        <select
          name="category"
          id="category"
          className="form-select"
          onChange={(e) => {
            onCategory(() => e.target.value);
          }}
          aria-label="Default select example"
        >
          <option value="">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals &amp; Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science &amp; Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
          <option value="32">Entertainment: Cartoon &amp; Animations</option>
        </select>
      </div>
      <div>
        <label htmlFor="difficulty" className="form-label">
          Select Difficulty
        </label>
        <select
          name="difficulty"
          id="difficulty"
          className="form-select"
          onChange={(e) => {
            onDifficulty(() => e.target.value);
          }}
        >
          <option value="">Any Difficulty</option>
          <option value="easy">Easy Difficulty</option>
          <option value="medium">Medium Difficulty</option>
          <option value="hard">Hard Difficulty</option>
        </select>
      </div>
      <div>
        <label htmlFor="type" className="form-label">
          Select Type
        </label>
        <select
          name="type"
          id="type"
          className="form-select"
          onChange={(e) => {
            onGameType(() => e.target.value);
          }}
        >
          <option value="">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True or False</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Start Game
      </button>
    </form>
  );
}
