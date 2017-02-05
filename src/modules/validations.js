export const EmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PhoneRegex = /^[0|1][0-8]\d{8}$/i;
export const JpgRegex = /\.jpe?g$/i;
export const PngRegex = /\.png$/i;
export const FILE_SIZE = 2500000; //2.5mb

// Used with react-inform
export const EmailValidation = (email, EmailError, errors) => {
  if (!email) {
    errors.email = "Email required!";
  } else if (EmailRegex.test(email) !== true) {
    errors.email = "invalid email";
    EmailError = true;
  } else {
    EmailError = false;
  }
  return EmailError;
};

export const PasswordValidation = (password, PasswordError, errors, length = null) => {

  if (!password) {
    errors.password = "Password is required!";
  } else if (password.length < 8 && length) {
    errors.password = "8 characters minimum";
    PasswordError = true;
  } else {
    PasswordError = false;
  }
  return PasswordError;
};

export const Required = (KeyName, name, DisplayName, NameError, errors) => {
  if (!name) {
    errors[KeyName] = DisplayName + " is required";
  } else if (name.length < 2) {
    errors[KeyName] = "invalid " + DisplayName;
  }
};

export const PhoneValidation = (phone, PhoneError, errors) => {
  if (!phone) {
    errors.phone = "Phone number is required";
  } else if (phone.length > 10) {
    errors.phone = "Must be 10 numbers";
  } else if (PhoneRegex.test(phone) !== true) {
    errors.phone = "invalid phone number";
  }
};
