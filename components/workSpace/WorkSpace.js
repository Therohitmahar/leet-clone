import React from "react";
import Split from "react-split";
import ProblemDesc from "./problemDesc/ProblemDesc";
import PlayGround from "./playground/PlayGround";
import ReactConfetti from "react-confetti";
const WorkSpace = () => {
  return (
    <Split className="split">
      <ProblemDesc />
      <PlayGround />
      
    </Split>
  );
};

export default WorkSpace;
