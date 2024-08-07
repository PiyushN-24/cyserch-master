"use client";

import React, { useState } from "react";
import { courseData } from "../CourseLearningPath";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

const LearningPath: React.FC = () => {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const handleTitleClick = (index: number) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter((i) => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

  return (
    <div className="px-4 sm:px-[7rem] py-[3rem]">
      <h2 className="text-2xl text-white font-bold mb-6">Learning Path</h2>
      <div className="space-y-2">
        {courseData.map((data, index) => (
          <div
            key={index}
            className="bg-gray-200 text-gray-900 rounded-lg p-3 shadow"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleTitleClick(index)}
            >
              <h3 className="font-semibold">{data.title}</h3>
              <button className="p-2 rounded-full hover:bg-gray-300">
                {expandedIndices.includes(index) ? (
                  <ChevronUpIcon className="h-6 w-6" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6" />
                )}
              </button>
            </div>
            {expandedIndices.includes(index) && (
              <p className="mt-2">{data.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPath;