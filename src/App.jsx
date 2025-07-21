import { useState } from "react";
import Modal from "./components/Modal";
import modalOneImage from "./assets/01_SIGN_UP.png";
import modalTwoImage from "./assets/02_MESSAGE.png";
import modalThreeImage from "./assets/03_CHECKBOX.png";
const App = () => {
  const [open] = useState(true);
  const [modalStep, setModalStep] = useState([
    {
      stepNumber: 1,
      completed: false,
      name: "Sign Up",
      active: true,
    },
    {
      stepNumber: 2,
      completed: false,
      name: "Message",
      active: false,
    },
    { stepNumber: 3, completed: false, name: "CheckBox", active: false },
  ]);
  const [currentStep, setCurrentStep] = useState(modalStep[0]);

  const handleSteps = (step) => {
    const nextStepNumber = step.stepNumber + 1;
    const updatedSteps = modalStep.map((s) => {
      if (s.stepNumber === step.stepNumber) {
        return { ...s, completed: true, active: false };
      } else if (s.stepNumber === nextStepNumber) {
        return { ...s, active: true };
      } else {
        return s;
      }
    });

    setModalStep(updatedSteps);

    const nextStep = updatedSteps.find((s) => s.stepNumber === nextStepNumber);
    if (nextStep) {
      setCurrentStep(nextStep);
    }
  };

  const handleBack = (step) => {
    const previousStepNumber = step.stepNumber - 1;
    const updatedSteps = modalStep?.map((s) => {
      if (s.stepNumber === step.stepNumber) {
        return { ...s, completed: false, active: false };
      } else if (s.stepNumber === previousStepNumber) {
        return { ...s, active: true, completed: false };
      } else {
        return s;
      }
    });
    setModalStep(updatedSteps);
    const previousStep = updatedSteps.find(
      (s) => s.stepNumber === previousStepNumber
    );
    if (previousStep) {
      setCurrentStep(previousStep);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-[#5c5d5f] via-[#8BA9F2] to-[#5E87E4] flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-8">
        Welcome to the Modal Demo
      </h1>

      {open &&
        (currentStep?.stepNumber === 1 ? (
          <Modal
            sideImage={modalOneImage}
            steps={currentStep}
            handleSteps={handleSteps}
            modalStep={modalStep}
            handleBack={handleBack}
          >
            <div className="mt-10">
              <h5 className="text-gray-400 text-sm font-[500]">Step 1/3</h5>
              <h4 className="text-black font-bold text-2xl">Sign Up</h4>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10 text-[12px]">
              <div>
                <h5 className="text-black text-sm pb-1 font-[500]">
                  First Name
                </h5>
                <input
                  type="text"
                  placeholder="eg. John"
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <h5 className="text-black text-sm pb-1 font-[500]">
                  Last Name
                </h5>
                <input
                  type="text"
                  placeholder="eg. Doe"
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <h5 className="text-black text-sm pb-1 font-[500]">
                  Date Of Birth
                </h5>
                <input
                  type="text"
                  placeholder="dd/mm/yyyy"
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <h5 className="text-black text-sm pb-1 font-[500]">
                  Email Address
                </h5>
                <input
                  type="email"
                  placeholder="eg. john@example.com"
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="col-span-2">
                <h5 className="text-black text-sm pb-1 font-[500]">Address</h5>
                <input
                  type="text"
                  placeholder="eg. 123 Main St"
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </Modal>
        ) : currentStep?.stepNumber === 2 ? (
          <Modal
            sideImage={modalTwoImage}
            steps={currentStep}
            handleSteps={handleSteps}
            modalStep={modalStep}
            handleBack={handleBack}
          >
            <div className="mt-10">
              <h5 className="text-gray-400 text-sm">Step 2/3</h5>
              <h4 className="text-black font-bold text-2xl">Message</h4>
            </div>

            <div className="mt-14">
              <h5 className="text-black text-sm pb-1 font-[500]">
                Your Message
              </h5>
              <textarea
                placeholder="Type your message here..."
                className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <h5 className="text-black text-sm pb-1 font-[500]">Subject</h5>
                <input
                  type="text"
                  placeholder="e.g. Feedback"
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <h5 className="text-black text-sm pb-1 font-[500]">Category</h5>
                <select className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mx-auto">
                  <option value="">Choose one</option>
                  <option value="bug">Bug</option>
                  <option value="feature">Feature Request</option>
                  <option value="general">General</option>
                </select>
              </div>
            </div>
          </Modal>
        ) : (
          <Modal
            sideImage={modalThreeImage}
            steps={currentStep}
            handleSteps={handleSteps}
            modalStep={modalStep}
            handleBack={handleBack}
          >
            <div className="mt-10">
              <h5 className="text-gray-400 text-sm">Step 3/3</h5>
              <h4 className="text-black font-bold text-2xl">CheckBox</h4>
            </div>

            <div className="mt-10 space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-black text-sm">
                  I agree to the Terms and Conditions
                </span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-black text-sm">
                  Subscribe to newsletter
                </span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-black text-sm">
                  Receive promotional emails
                </span>
              </label>
            </div>
          </Modal>
        ))}
    </div>
  );
};

export default App;
