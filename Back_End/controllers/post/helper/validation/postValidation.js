import sanitizeHtml from 'sanitize-html';

export const sanitizeInput = (value) => {
  return sanitizeHtml(value, {
    allowedTags: [],
    allowedAttributes: {},
  });
};

export const sanitizeCodeInput = (input) => {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }

  // Экранируем JSX-теги
  console.log(`на входе ${input}`);
  const escapedInput = getEscapedInput(input);
  console.log(`на выходе ${escapedInput}`);

  // Настройки sanitize-html
  const options = {
    allowedTags: [
      'b',
      'i',
      'em',
      'strong',
      'a',
      'p',
      'ul',
      'li',
      'ol',
      'blockquote',
      'code',
      'pre',
      'span',
    ],
    allowedAttributes: {
      a: ['href', 'target', 'rel'], // Разрешенные атрибуты для ссылок
    },
  };

  // Применение sanitize-html к обычному HTML
  const sanitizedHtml = sanitizeHtml(escapedInput, options);

  return sanitizedHtml;
};

const getEscapedInput = (input) => {
  const decode = decodeJSX(input);
  const escapeTags = escapeJsxTags(decode);
  return escapeTags;
};

const decodeJSX = (input) => {
  return input
    .replace(/&amp;/g, '&') // Декодируем символ &
    .replace(/&lt;/g, '<') // Декодируем символ <
    .replace(/&gt;/g, '>'); // Декодируем символ >
};

const escapeJsxTags = (input) => {
  return input
    .replace(/</g, '&lt;') // Экстрируем символ <
    .replace(/>/g, '&gt;') // Экстрируем символ >
    .replace(/&/g, '&amp;'); // Экстрируем символ &
};

export const validateModels = (models) => {
  models.forEach((element) => {
    if (typeof element.id !== 'number') {
      throw new Error('id каждой модели models должен быть числом');
    }

    validateModelsType(element);
    validateModelContent(element);
  });
  return true;
};

const validateModelsType = (element) => {
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
      `type каждой модели должен быть одним из: ${validTypes.join(', ')} а у вас ${element.type}`
    );
  }

  if (element.type === 'main_title') {
    if (element.fontSize === null) {
      throw new Error('fontSize должен быть указан для типа main_title');
    }
    if (element.value.length > 100) {
      throw new Error('Название слишком длинное');
    }
  }
};

const validateModelContent = (element) => {
  if (element.type.includes('view')) {
    if (!element.imageUrl) {
      throw new Error('url изображения неправильный или отсутствует');
    }
    element.imageUrl = sanitizeInput(element.imageUrl);
  }

  if (element.value !== undefined && typeof element.value !== 'string') {
    throw new Error('value должно быть строкой или отсутствовать');
  }

  if (element.type.includes('code')) {
    element.value = sanitizeCodeInput(element.value);
  } else {
    if (element.value) {
      element.value = sanitizeInput(element.value);
    }
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
