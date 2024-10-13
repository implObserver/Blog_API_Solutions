import sanitizeHtml from 'sanitize-html';

const sanitizeInput = (value) => {
  return sanitizeHtml(value, {
    allowedTags: [],
    allowedAttributes: {},
  });
};

export const validateComment = (comment) => {
  if (comment) {
    comment = sanitizeInput(comment);
  }
  return true;
};
