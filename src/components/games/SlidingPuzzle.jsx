import { useState, useCallback } from "react";
import "../../styles/puzzle.css";

const GRID_SIZE = 3;
const TILE_SIZE = 100;

// Standard 8-puzzle solvability check: an odd-width board (3 columns
// here) is solvable only when the number of inversions among the
// non-blank tiles is even.
function isSolvable(arr) {
  const nums = arr.filter((n) => n !== null);
  let inversions = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) inversions++;
    }
  }
  return inversions % 2 === 0;
}

// Shuffles until the result is guaranteed solvable, rather than
// accepting whatever a single random shuffle produces.
function shuffledTiles() {
  let tiles;
  do {
    tiles = [...Array(8).keys()].map((n) => n + 1);
    tiles.push(null);
    for (let i = tiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
  } while (!isSolvable(tiles));
  return tiles;
}

function isAdjacent(i1, i2) {
  const row1 = Math.floor(i1 / GRID_SIZE);
  const col1 = i1 % GRID_SIZE;
  const row2 = Math.floor(i2 / GRID_SIZE);
  const col2 = i2 % GRID_SIZE;
  return Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1;
}

const WIN_STATE = [...Array(8).keys()].map((n) => n + 1).concat(null);

// 3x3 sliding tile puzzle, embedded directly in its Portfolio card.
// Ported from a vanilla-JS/DOM version to React state. Two real bugs
// fixed in the port: shuffles are now guaranteed solvable (the
// original computed solvability but never used it), and the win
// message is an inline, screen-reader-announced status instead of a
// blocking alert().
const SlidingPuzzle = () => {
  const [tiles, setTiles] = useState(shuffledTiles);
  const [won, setWon] = useState(false);

  const moveTile = useCallback(
    (index) => {
      const emptyIndex = tiles.indexOf(null);
      if (!isAdjacent(index, emptyIndex)) return;

      const next = [...tiles];
      [next[index], next[emptyIndex]] = [next[emptyIndex], next[index]];
      setTiles(next);
      setWon(next.every((val, i) => val === WIN_STATE[i]));
    },
    [tiles],
  );

  const handleShuffle = () => {
    setTiles(shuffledTiles());
    setWon(false);
  };

  return (
    <div className="puzzle-content">
      <div id="puzzle-container">
        {tiles.map((tile, index) =>
          tile === null ? (
            <div className="tile empty" key="empty" aria-hidden="true" />
          ) : (
            <button
              key={tile}
              type="button"
              className="tile"
              style={{
                backgroundPosition: `-${((tile - 1) % GRID_SIZE) * TILE_SIZE}px -${
                  Math.floor((tile - 1) / GRID_SIZE) * TILE_SIZE
                }px`,
              }}
              aria-label={`Tile ${tile}`}
              onClick={() => moveTile(index)}
            />
          ),
        )}
      </div>
      <button
        type="button"
        className="message-button puzzle-shuffle-btn"
        onClick={handleShuffle}
      >
        Shuffle
      </button>
      <p role="status" className="puzzle-status">
        {won ? "🎉 You solved it!" : ""}
      </p>
    </div>
  );
};

export default SlidingPuzzle;
