import React from "react";
import Steps from "../commonComponents/Steps";
import { motion, AnimatePresence } from "framer-motion";

const swipeVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const Modal = ({
  sideImage,
  children,
  steps,
  handleSteps,
  handleBack,
  modalStep,
  handlePerticularStep,
}) => {
  return (
    <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm z-50">
      <div className="bg-white rounded-3xl shadow-lg w-9/12 mx-auto mt-5 overflow-hidden flex h-11/12">
        <div className="w-2/5">
          <img src={sideImage} alt="Placeholder" className="w-full h-full" />
        </div>

        <div className="w-3/5 mx-20 relative">
          <div className="pt-10 border-amber-100 flex gap-10">
            {modalStep?.map((step, index) => (
              <Steps
                key={index}
                step={step?.stepNumber}
                stepName={step?.name}
                active={step?.active}
                completed={step?.completed}
                handlePerticularStep={handlePerticularStep}
                stepObject={step}
              />
            ))}
          </div>
          <div className="w-full bg-[#F3F3F3] h-[2px] mt-5 mb-10" />

          <AnimatePresence mode="wait">
            <motion.div
              key={steps?.stepNumber}
              variants={swipeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="h-[calc(100vh-400px)]"
            >
              {children}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-end mt-10 gap-2">
            {steps?.stepNumber > 1 && (
              <button
                onClick={() => handleBack(steps)}
                className=" text-black px-6 py-2 rounded-lg hover:bg-[#0D75FF] hover:text-white transition duration-200"
              >
                Back
              </button>
            )}

            <button
              onClick={() => handleSteps(steps)}
              className="bg-[#0D75FF] text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition duration-200 cursor-pointer"
            >
              {modalStep?.length === steps?.stepNumber ? "Finish" : "Next Step"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
