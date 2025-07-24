import Steps from "../commonComponents/Steps";
import { motion, AnimatePresence } from "framer-motion";
import { FORM_JSON } from "../utils/constant";
const swipeVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const Modal = ({
  sideImage,
  children,
  currentStep,
  handleSteps,
  handleBack,
  handleSubmit,
}) => {
  const isSubmit = FORM_JSON?.length !== currentStep?.stepNumber;

  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (isSubmit) {
      handleSteps(currentStep?.stepNumber);
    } else {
      handleSubmit();
    }
  };

  return (
    <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm z-50 flex justify-center items-center">
      <div className="bg-white rounded-3xl shadow-lg w-9/12 overflow-x-hidden flex lg:flex-row h-4/5  flex-col">
        <div className="w-full h-4 bg-[#0c75ff] lg:h-full lg:w-2/5">
          <img
            src={sideImage}
            alt="Placeholder"
            className="w-full h-full hidden lg:block"
          />
        </div>

        <form
          className="lg:w-3/5 lg:mx-20 relative h-full flex flex-col"
          onSubmit={handleModalSubmit}
        >
          <div className="lg:pt-10 border-amber-100 flex gap-10 pt-5 justify-between md:justify-start mx-10">
            {FORM_JSON?.map((step, index) => (
              <Steps
                key={index}
                step={step?.stepNumber}
                stepName={step?.name}
                completed={step?.completed}
                stepObject={step}
                active={step?.stepNumber === currentStep?.stepNumber}
              />
            ))}
          </div>
          <div className="md:w-full bg-[#F3F3F3] h-[2px] mt-5 w-11/12 mx-auto" />
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep?.stepNumber}
              variants={swipeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className=" min-h-[calc(100vh-s)] h-full overflow-y-auto md:min-h-0 "
            >
              <div className="mx-10 md:mx-5 lg:mx-auto px-1">{children}</div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-end gap-2 my-5 lg:my-12 mx-10 lg:mx-0">
            {currentStep?.stepNumber > 1 && (
              <button
                onClick={() => handleBack(currentStep?.stepNumber)}
                className="px-6 py-2 rounded-lg bg-gray-200 text-gray-600 transition duration-200 cursor-pointer hover:bg-gray-300"
              >
                Back
              </button>
            )}
            <button
              className="bg-[#0D75FF] text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition duration-200 cursor-pointer"
              type="submit"
            >
              {isSubmit ? "Next Step" : "Finish"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
