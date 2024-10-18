import validator from 'validator';

export const validateUsernameOrMail = (field) => {
  const sanitizedField = sanitizeField(field);

  if (isMail(sanitizedField)) {
    return true;
  } else if (isUsernameValid(sanitizedField)) {
    return true;
  }

  throw new Error('Invalid email or username.');
};

const sanitizeField = (field) => {
  return validator.trim(validator.escape(field));
};

const isMail = (field) => {
  return validator.isEmail(field);
};

const isUsernameValid = (username) => {
  return username.length > 0; // Валидация имени пользователя
};
