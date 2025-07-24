import validator from "validator";

const formValidation = (values, step) => {
  const errors = {};

  if (step === 1) {
    if (!values.firstName || validator.isEmpty(values.firstName.trim())) {
      errors.firstName = "This field is required";
    }

    if (!values.lastName || validator.isEmpty(values.lastName.trim())) {
      errors.lastName = "This field is required";
    }

    if (!values.email) {
      errors.email = "This field is required";
    } else if (!validator.isEmail(values.email)) {
      errors.email = "Invalid email address";
    }

    if (
      !values.dob ||
      !validator.matches(values.dob, /^\d{2}\/\d{2}\/\d{4}$/)
    ) {
      errors.dob = "Invalid DOB format (DD/MM/YYYY)";
    }
  }

  if (step === 2) {
    if (!values.message || validator.isEmpty(values.message.trim())) {
      errors.message = "Message is required";
    }

    if (!values.subject || validator.isEmpty(values.subject.trim())) {
      errors.subject = "Subject is required";
    }

    if (!values.category || validator.isEmpty(values.category.trim())) {
      errors.category = "Please select a category";
    }
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

export default formValidation;
