import SlidingPuzzle from "../games/SlidingPuzzle";
import "../../styles/puzzle.css";

const PuzzlePage = () => {
  return (
    <section id="puzzle-page" className="puzzle-page-section">
      <h2 className="puzzle-page-heading">Sliding Puzzle</h2>
      <p className="puzzle-page-intro">
        A 3x3 sliding tile puzzle built with plain JavaScript logic and CSS Grid
        — no puzzle libraries, just array manipulation and a solvability check
        to make sure every shuffle is actually winnable.
      </p>
      <SlidingPuzzle />
    </section>
  );
};

export default PuzzlePage;
