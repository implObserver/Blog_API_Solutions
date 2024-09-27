import sanitizeHtml from 'sanitize-html';

export const sanitizeInput = (value) => {
  return sanitizeHtml(value, {
    allowedTags: [],
    allowedAttributes: {},
  });
};

export const validateElements = (elements) => {
  elements.forEach((element) => {
    if (typeof element.id !== 'number') {
      throw new Error('id каждого элемента elements должен быть числом');
    }

    validateElementType(element);
    validateElementContent(element);
  });
  return true;
};

const validateElementType = (element) => {
  const validTypes = [
    'main_title',
    'list_header',
    'title',
    'list_element',
    'preview',
    'view',
    'text',
    'code',
  ];
  if (!validTypes.includes(element.type)) {
    throw new Error(
      `type каждого элемента elements должен быть одним из: ${validTypes.join(', ')} а у вас ${element.type}`
    );
  }

  if (element.type === 'main_title' && element.fontSize === null) {
    throw new Error('fontSize должен быть указан для типа main_title');
  }
};

const validateElementContent = (element) => {
  if (element.type.includes('view')) {
    if (!element.imageUrl) {
      throw new Error('url изображения неправильный или отсутствует');
    }
    element.imageUrl = sanitizeInput(element.imageUrl);
  }

  if (element.value !== undefined && typeof element.value !== 'string') {
    throw new Error('value должно быть строкой или отсутствовать');
  }

  if (element.value) {
    element.value = sanitizeInput(element.value);
  }

  if (element.strong) {
    element.strong = sanitizeInput(element.strong);
  }

  if (
    element.freshness !== undefined &&
    typeof element.freshness !== 'number'
  ) {
    throw new Error('freshness должно быть числом');
  }
};
