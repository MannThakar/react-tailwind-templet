import { Check } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const stepItemVariant = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

const Steps = ({ step, stepName, active, completed }) => {
  return (
    <motion.div
      variants={stepItemVariant}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.3, delay: step * 0.1 }}
      className="flex h-fit items-center gap-3"
    >
      <div
        className={`h-8 w-8 rounded-md flex items-center justify-center
          ${active ? "bg-[#0C75FF] text-white" : ""}
          ${completed ? "bg-[#cae8ca] text-white" : ""}
          ${!active && !completed ? "bg-gray-300 text-gray-500" : ""}
        `}
      >
        {completed ? (
          <Check className="text-white cursor-pointer" strokeWidth={3} />
        ) : (
          step
        )}
      </div>

      <h4
        className={`${
          active ? "text-black" : "text-gray-800"
        } text-[14px] font-[500] hidden md:block`}
      >
        {stepName}
      </h4>
    </motion.div>
  );
};

export default Steps;
