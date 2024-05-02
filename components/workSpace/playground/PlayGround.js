import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import ReactCodeMirror from "@uiw/react-codemirror";
import React from "react";
import Split from "react-split";
const PlayGround = () => {
  return (
    <div className="flex flex-col bg-dark-layer-1 relative">
      <Split
        className="h-[calc(100vh-94px)]"
        direction="vertical"
        sizes={[60, 40]}
        minSize={60}
      >
        <div className="w-full overflow-auto">
          <ReactCodeMirror
            theme={vscodeDark}
            value="const a = 2;"
            extensions={[javascript()]}
            style={{ fontSize: 16 }}
          />
        </div>
        <div>test cases</div>
      </Split>
    </div>
  );
};

export default PlayGround;
