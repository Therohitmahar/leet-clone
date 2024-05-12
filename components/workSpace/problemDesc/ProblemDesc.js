import {
  Star,
  StarOutline,
  TaskAltOutlined,
  ThumbDown,
  ThumbUp,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "highlight.js/styles/github.css";

import "prismjs/components/prism-javascript";
import ReactPrismjs from "@uiw/react-prismjs";
import Highlight from "react-highlight";
import ReactConfetti from "react-confetti";
const ProblemDesc = () => {
  const [showSolution, setShowSolution] = useState(false);
  const [like, setLike] = useState({
    like: false,
    dislike: false,
    stared: false,
  });
  const handleLike = (key, value) => {
    setLike((prev) => ({ ...prev, [key]: !value }));
  };
  useEffect(() => {
    // Trigger Prism.js to highlight code after the component mounts
    Prism.highlightAll();
  }, []);
  return (
    <div className="bg-dark-layer-1">
      {/* TAB */}
      <div className="flex h-11 w-full  items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden">
        <div
          className={`${
            !showSolution ? "bg-dark-layer-1" : "bg-dark-layer-2"
          } rounded-t-[5px] mr-1 px-5 py-[10px] text-xs cursor-pointer`}
          onClick={() => setShowSolution(false)}
        >
          Description
        </div>
        <div
          className={`${
            showSolution ? "bg-dark-layer-1" : "bg-dark-layer-2"
          } rounded-t-[5px] px-5 py-[10px] 
          text-xs cursor-pointer`}
          onClick={() => setShowSolution(true)}
        >
          Solution
        </div>
      </div>

      <div className="flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto">
        {!showSolution ? (
          <div className="px-5">
            {/* Problem heading */}
            <div className="w-full">
              <div className="flex space-x-4">
                <div className="flex-1 mr-2 text-lg text-white font-medium">
                  1. Two Sum
                </div>
              </div>

              <div className="flex items-center mt-3">
                <div class="text-olive bg-olive  text-olive bg-olive  inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize ">
                  Easy
                </div>
                {/* {
                <div className="rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s">
                  <TaskAltOutlined />
                </div>
              } */}
                <div
                  className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6"
                  onClick={() => {
                    if (like.dislike) {
                      setLike((prev) => ({ ...prev, dislike: false }));
                    }
                    handleLike("like", like.like);
                  }}
                >
                  {like.like ? (
                    <ThumbUp className="text-dark-blue-s" />
                  ) : (
                    <ThumbUp />
                  )}
                  <span className="text-xs">20</span>
                </div>
                <div
                  className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6"
                  onClick={() => {
                    if (like.like) {
                      setLike((prev) => ({ like: false }));
                    }
                    handleLike("dislike", like.dislike);
                  }}
                >
                  {like.dislike ? (
                    <ThumbDown className="text-dark-blue-s" />
                  ) : (
                    <ThumbDown />
                  )}
                  <span className="text-xs">{10}</span>
                </div>
                <div
                  className="cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 "
                  onClick={() => handleLike("stared", like.stared)}
                >
                  {like.stared ? (
                    <Star className="text-dark-yellow" />
                  ) : (
                    <StarOutline />
                  )}
                </div>
              </div>

              <div className="text-white text-sm">
                <p class="mt-3">
                  Given an array of integers <code>nums</code> and an integer{" "}
                  <code>target</code>, return
                  <em>
                    indices of the two numbers such that they add up to
                  </em>{" "}
                  <code>target</code>.
                </p>{" "}
                <p class="mt-3">
                  You may assume that each input would have{" "}
                  <strong>exactly one solution</strong>, and you may not use
                  thesame element twice.
                </p>
                <p class="mt-3">You can return the answer in any order.</p>
              </div>
              <div class="mt-4">
                <div>
                  <p class="font-medium text-white">Example 1:</p>
                  <div class="io-card">
                    <pre>
                      <strong class="dark:text-white">Input:</strong> nums =
                      [2,7,11,15], target = 9
                      <br />
                      <strong class="dark:text-white">Output:</strong> [0,1]
                      <br />
                      <strong class="dark:text-white">Explanation:</strong>{" "}
                      Because nums[0] + nums[1] == 9, we return [0, 1].
                    </pre>
                  </div>
                </div>
                <div>
                  <p class="font-medium text-white">Example 2:</p>
                  <div class="io-card">
                    <pre>
                      <strong class="dark:text-white">Input:</strong> nums =
                      [3,2,4], target = 6
                      <br />
                      <strong class="dark:text-white">Output:</strong> [1,2]
                      <br />
                      <strong class="dark:text-white">Explanation:</strong>{" "}
                      Because nums[1] + nums[2] == 6, we return [1, 2].
                    </pre>
                  </div>
                </div>
                <div>
                  <p class="font-medium text-white">Example 3:</p>
                  <div class="io-card">
                    <pre>
                      <strong class="dark:text-white">Input:</strong> nums =
                      [3,3], target = 6
                      <br />
                      <strong class="dark:text-white">Output:</strong> [0,1]
                      <br />
                    </pre>
                  </div>
                </div>
              </div>

              {/* Constraints */}
              <div class="my-5">
                <div class="text-white text-sm font-medium">Constraints:</div>
                <ul class="text-white ml-5 list-disc">
                  <div>
                    <li class="mt-2">
                      <code>
                        2 &lt;= nums.length &lt;= 10<sup>4</sup>
                      </code>
                    </li>
                    <li class="mt-2">
                      <code>
                        -10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup>
                      </code>
                    </li>
                    <li class="mt-2">
                      <code>
                        -10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup>
                      </code>
                    </li>
                    <li class="mt-2 text-sm">
                      <strong>Only one valid answer exists.</strong>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Highlight className="bg-dark-layer-2" language="javascript">
              {`
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
          `}
            </Highlight>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProblemDesc;
