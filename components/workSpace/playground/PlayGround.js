import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import ReactCodeMirror from "@uiw/react-codemirror";
import { loadLanguage, langNames } from "@uiw/codemirror-extensions-langs";
import React, { useState } from "react";
import Split from "react-split";
import { ayuLight } from "thememirror";
import { handleTwoSumProblem } from "@/src/problems/two-sum";
import EditorFooter from "./EditorFooter";
import ReactConfetti from "react-confetti";
const PlayGround = () => {
  const [language, setLanguage] = useState("javascript");
  const [activeTestCase, setActiveTestCase] = useState(0);
  const [success, setSuccess] = useState(false)
  const [code, setCode] = useState(`function twoSum(nums, target) {
    // Write your code here
  };`);

  const onCodeChange = (e) => {
    setCode(e);
  };
  
  const handleSubmit = () => {
    const fn = new Function(`return ${code}`)();
    const result = handleTwoSumProblem(fn);
    if (result) {
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
      }, 4000);
    }
  };
  const problems = {
    examples: [
      {
        id: 1,
        inputText: "nums = [2,7,11,15], target = 9",
        outputText: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        id: 2,
        inputText: "nums = [3,2,4], target = 6",
        outputText: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
      },
      {
        id: 3,
        inputText: " nums = [3,3], target = 6",
        outputText: "[0,1]",
      },
    ],
  };
  return (<>
    <div className="flex flex-col bg-dark-layer-1 relative">
      <Split
        className="h-[calc(100vh-94px)]"
        direction="vertical"
        sizes={[60, 40]}
        minSize={60}
      >
        <div className="w-full overflow-auto">
          <select
            class="block w-fit m-2 p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {langNames?.map((item, index) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <ReactCodeMirror
            fontSize={"12px"}
            theme={vscodeDark}
            value={code}
            extensions={[loadLanguage(language)]}
            style={{ fontSize: 16 }}
            onChange={onCodeChange}
          />
        </div>
        {/* <div className="flex flex-col h-100">
          <div> Test cases</div>
          <div className="justify-self-end mt-auto ml-auto">
            <button
              type="button"
              onClick={() => handleRun()}
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Run
            </button>

            <button
              type="button"
              onClick={()=>handleSubmit()}
              class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Submit
            </button>
          </div>
        </div> */}
        <div className="w-full px-5 overflow-auto">
          {/* testcase heading */}
          <div className="flex h-10 items-center space-x-6">
            <div className="relative flex h-full flex-col justify-center cursor-pointer">
              <div className="text-sm font-medium leading-5 text-white">
                Testcases
              </div>
              <hr className="absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white" />
            </div>
          </div>

          <div className="flex">
            {problems.examples.map((example, index) => (
              <div
                className="mr-2 items-start mt-2 "
                key={example.id}
                onClick={() => setActiveTestCase(index)}
              >
                <div className="flex flex-wrap items-center gap-y-4">
                  <div
                    className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
										${activeTestCase === index ? "text-white" : "text-gray-500"}
									`}
                  >
                    Case {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="font-semibold my-4">
            <p className="text-sm font-medium mt-4 text-white">Input:</p>
            <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2">
              {problems.examples[activeTestCase].inputText}
            </div>
            <p className="text-sm font-medium mt-4 text-white">Output:</p>
            <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2">
              {problems.examples[activeTestCase].outputText}
            </div>
          </div>
        </div>
      </Split>
      <EditorFooter handleSubmit={handleSubmit} />
    </div>
      {success && <ReactConfetti gravity={0.4} tweenDuration={5000} />}</>
  );
};

export default PlayGround;
