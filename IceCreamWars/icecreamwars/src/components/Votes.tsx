import { useState } from "react";
import { FlavorVotes } from "../models/Flavors";

function IceCreamVoter() {
  const [votes, setVotes] = useState<FlavorVotes>({
    chocolate: 0,
    vanilla: 0,
    strawberry: 0,
  });

  function addVote(flavor: keyof FlavorVotes) {
    const newVotes = { ...votes };
    newVotes[flavor] += 1;
    setVotes(newVotes);
  }

  function getTotalVotes() {
    return votes.chocolate + votes.vanilla + votes.strawberry;
  }

  function getPercentage(flavorVotes: number) {
    const total = getTotalVotes();
    return total > 0 ? (flavorVotes / total) * 100 : 0;
  }

  return (
    <div>
      <h2>Vote for your favorite ice cream!</h2>
      <button onClick={() => addVote("chocolate")}>Chocolate</button>
      <button onClick={() => addVote("vanilla")}>Vanilla</button>
      <button onClick={() => addVote("strawberry")}>Strawberry</button>

      {votes.chocolate > 0 && (
        <div>
          Chocolate: {votes.chocolate} (
          {getPercentage(votes.chocolate).toFixed(1)}%)
          <div
            style={{
              width: `${getPercentage(votes.chocolate)}%`,
              backgroundColor: "brown",
              height: "20px",
            }}
          ></div>
        </div>
      )}

      {votes.vanilla > 0 && (
        <div>
          Vanilla: {votes.vanilla} ({getPercentage(votes.vanilla).toFixed(1)}%)
          <div
            style={{
              width: `${getPercentage(votes.vanilla)}%`,
              backgroundColor: "yellow",
              height: "20px",
            }}
          ></div>
        </div>
      )}

      {votes.strawberry > 0 && (
        <div>
          Strawberry: {votes.strawberry} (
          {getPercentage(votes.strawberry).toFixed(1)}%)
          <div
            style={{
              width: `${getPercentage(votes.strawberry)}%`,
              backgroundColor: "pink",
              height: "20px",
            }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default IceCreamVoter;
