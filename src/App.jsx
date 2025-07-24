import { useState } from "react";
import Modal from "./components/Modal";
import modalOneImage from "./assets/01_SIGN_UP.png";
import modalTwoImage from "./assets/02_MESSAGE.png";
import modalThreeImage from "./assets/03_CHECKBOX.png";
import { FORM_JSON } from "./utils/constant";
import formValidation from "./validation";
import moment from "moment";

const App = () => {
  const [form, setForm] = useState({});
  const [open, setOpen] = useState(true);
  const [formErrors, setFormErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(FORM_JSON[0]);

  const handleSteps = (step) => {
    const { errors, isValid } = formValidation(form, step);
    if (isValid) {
      FORM_JSON?.forEach((individualStep, index) => {
        individualStep?.stepNumber == step
          ? (FORM_JSON[index] = {
              ...individualStep,
              completed: true,
            })
          : { individualStep };
      });
      setFormErrors({});
      setCurrentStep(FORM_JSON[step]);
    } else {
      setFormErrors(errors);
    }
  };

  const handleBack = (step) => {
    const prevStep = step - 1;
    FORM_JSON?.forEach((individualStep, index) => {
      individualStep?.stepNumber == prevStep
        ? (FORM_JSON[index] = {
            ...individualStep,
            completed: false,
          })
        : { individualStep };
    });
    setCurrentStep(FORM_JSON[prevStep - 1]);
  };

  const handleSubmit = () => {
    setOpen(false);
  };

  const handleForm = (event) => {
    const { name, value } = event?.target;

    setForm({
      ...form,
      [name]: name === "dob" ? moment(value).format("DD/MM/YYYY") : value,
    });
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
            currentStep={currentStep}
            handleSteps={handleSteps}
            handleBack={handleBack}
          >
            <div className="lg:mt-8 mt-5">
              <h5 className="text-gray-400 text-sm font-[500]">Step 1/3</h5>
              <h4 className="text-black font-bold text-2xl">Sign Up</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 lg:mt-5 text-xs mt-5">
              <div>
                <h5 className="text-black text-sm pb-1 font-[500]">
                  First Name<span className="text-red-500">*</span>
                </h5>
                <input
                  name="firstName"
                  type="text"
                  placeholder="eg. John"
                  className={
                    `w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm` +
                    (formErrors?.firstName
                      ? " border-red-500 focus:ring-red-100"
                      : "")
                  }
                  onChange={handleForm}
                  value={form?.firstName}
                />
                {formErrors?.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors?.firstName}
                  </p>
                )}
              </div>
              <div>
                <h5 className="text-black text-sm pb-1 font-[500]">
                  Last Name<span className="text-red-500">*</span>
                </h5>
                <input
                  name="lastName"
                  type="text"
                  placeholder="eg. Doe"
                  className={
                    `w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm` +
                    (formErrors?.lastName
                      ? " border-red-500 focus:ring-red-100"
                      : "")
                  }
                  onChange={handleForm}
                  value={form?.lastName}
                />
                {formErrors?.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors?.lastName}
                  </p>
                )}
              </div>
              <div>
                <h5 className="text-black text-sm pb-1 font-[500]">
                  Date Of Birth<span className="text-red-500">*</span>
                </h5>
                <input
                  name="dob"
                  type="date"
                  placeholder="dd/mm/yyyy"
                  value={form?.dob && moment(form?.dob).format("YYYY-MM-DD")}
                  className={
                    `w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ` +
                    (formErrors?.dob
                      ? " border-red-500 focus:ring-red-100"
                      : "")
                  }
                  onChange={handleForm}
                />
                {formErrors?.dob && (
                  <p className="text-red-500 text-sm mt-1">{formErrors?.dob}</p>
                )}
              </div>
              <div>
                <h5 className="text-black text-sm pb-1 font-[500]">
                  Email Address<span className="text-red-500">*</span>
                </h5>
                <input
                  name="email"
                  type="text"
                  placeholder="eg. john@example.com"
                  className={
                    `w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm` +
                    (formErrors?.email
                      ? " border-red-500 focus:ring-red-100"
                      : "")
                  }
                  onChange={handleForm}
                  value={form?.email}
                />
                {formErrors?.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors?.email}
                  </p>
                )}
              </div>
              <div className="md:col-span-2">
                <h5 className="text-black text-sm pb-1 font-[500]">Address</h5>
                <textarea
                  className={
                    "w-full md:h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                  }
                  placeholder="Type your address here..."
                  name="address"
                  onChange={handleForm}
                  value={form?.address}
                />
                {formErrors?.address && (
                  <p className="text-red-500 text-sm">{formErrors?.address}</p>
                )}
              </div>
            </div>
          </Modal>
        ) : currentStep?.stepNumber === 2 ? (
          <Modal
            sideImage={modalTwoImage}
            currentStep={currentStep}
            handleSteps={handleSteps}
            handleBack={handleBack}
          >
            <div className="lg:mt-8 mt-5">
              <h5 className="text-gray-400 text-sm">Step 2/3</h5>
              <h4 className="text-black font-bold text-2xl">Message</h4>
            </div>

            <div className="lg:mt-5 mt-5">
              <h5 className="text-black text-sm pb-1 font-[500]">
                Your Message<span className="text-red-500">*</span>
              </h5>
              <textarea
                placeholder="Type your message here..."
                className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                name="message"
                onChange={handleForm}
                value={form?.message}
              />
              {formErrors?.message && (
                <p className="text-red-500 text-sm">{formErrors?.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:mt-10 mt-5">
              <div>
                <h5 className="text-black text-sm pb-1 font-[500]">
                  Subject
                  <span className="text-red-500">*</span>
                </h5>
                <input
                  name="subject"
                  type="text"
                  placeholder="e.g. Feedback"
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  onChange={handleForm}
                  value={form?.subject}
                />
                {formErrors?.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors?.subject}
                  </p>
                )}
              </div>
              <div>
                <h5 className="text-black text-sm pb-1 font-[500]">
                  Category
                  <span className="text-red-500">*</span>
                </h5>
                <select
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mx-auto text-sm"
                  name="category"
                  onChange={handleForm}
                  value={form?.category}
                >
                  <option value="">Choose one</option>
                  <option value="bug">Bug</option>
                  <option value="feature">Feature Request</option>
                  <option value="general">General</option>
                </select>
                {formErrors?.category && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors?.category}
                  </p>
                )}
              </div>
            </div>
          </Modal>
        ) : (
          <Modal
            sideImage={modalThreeImage}
            currentStep={currentStep}
            handleSteps={handleSteps}
            handleBack={handleBack}
            handleSubmit={handleSubmit}
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
