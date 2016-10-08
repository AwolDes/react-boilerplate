export const EmailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const PhoneRegex = /^0[0-8]\d{8}$/i;
export const JpgRegex = /\.jpe?g$/i;
export const PngRegex = /\.png$/i;

export const EmailValidation = (email, EmailError, errors) => {
  if (!email) {
    errors.email = 'Email is required!';
  } else if (EmailRegex.test(email) !== true) {
    errors.email = 'Please enter a valid email';
    EmailError = true;
  } else {
    EmailError = false;
  }
  return EmailError;
};

export const PasswordValidation = (password_key, password, PasswordError, errors) => {
  var PasswordKey = password_key;

  if (!password) {
    errors[PasswordKey] = 'Password is required!';
  } else if (password.length <= 7) {
    errors[PasswordKey] = 'Your password must be 7 characters or more';
    PasswordError = true;
  } else {
    PasswordError = false;
  }
  return PasswordError;
};

export const isRequiredPresent = (value) => {
  if (value !== undefined && value !== null) {
    return value.length > 0;
  }
  return false;
};
