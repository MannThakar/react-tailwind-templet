import { Check } from "lucide-react";
import React from "react";

const Steps = ({ step, stepName, active, completed }) => {
  return (
    <div className="flex h-fit items-center gap-3">
      <div
        className={`h-8 w-8 rounded-md flex items-center justify-center
    ${active ? "bg-[#0C75FF] text-white" : ""}
    ${completed ? "bg-green-300 text-white" : ""}
    ${!active && !completed ? "bg-gray-300 text-gray-500" : ""}
  `}
      >
        {completed ? <Check className="text-white cursor-pointer" /> : step}
      </div>
      <h4
        className={`${
          active ? "text-black" : "text-gray-800"
        } text-[14px] font-semibold`}
      >
        {stepName}
      </h4>
    </div>
  );
};

export default Steps;
