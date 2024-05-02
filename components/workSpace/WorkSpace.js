import React from "react";
import Split from "react-split";
import ProblemDesc from "./problemDesc/ProblemDesc";
import PlayGround from "./playground/PlayGround";
const WorkSpace = () => {
  return (
    <Split className="split">
      <ProblemDesc />
      <PlayGround />
    </Split>
  );
};

export default WorkSpace;
