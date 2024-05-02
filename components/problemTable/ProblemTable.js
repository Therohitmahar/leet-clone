import { problems } from "@/src/mock-probles/problems";
import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Link from "next/link";
const ProblemTable = () => {
  return (
    <>
      <tbody className="text-white">
        {problems?.map((problem, idx) => {
          const difficulyColor =
            problem.difficulty === "Easy"
              ? "text-dark-green-s"
              : problem.difficulty === "Medium"
              ? "text-dark-yellow"
              : "text-dark-pink";
          return (
            <tr
              className={`${idx % 2 == 1 ? "bg-dark-layer-1" : ""}`}
              key={problem.id}
            >
              <th className="px-2 py-4 font-medium whitespace-nowrap text-dark-green-s">
                <CheckCircleOutlineIcon fontSize={"18"} width="18" />
              </th>
              <td className="px-2 py-4">
                <Link
                  className="hover:text-blue-600 cursor-pointer"
                  href={`/problems/${problem.id}`}
                >
                  {problem.title}
                </Link>
              </td>
              <td className={`px-6 py-4 ${difficulyColor}`}>
                {problem.difficulty}
              </td>
              <td className={`px-6 py-4 `}>
                <p className="text-gray-400">Coming soon</p>
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

export default ProblemTable;
