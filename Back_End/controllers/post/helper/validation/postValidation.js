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
  models.forEach((model) => {
    if (typeof model.id !== 'number') {
      throw new Error('id каждой модели models должен быть числом');
    }

    validateModelsType(model);
    validateModelContent(model);
  });
  return true;
};

const validateModelsType = (model) => {
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

  if (!validTypes.includes(model.type)) {
    throw new Error(
      `type каждой модели должен быть одним из: ${validTypes.join(', ')} а у вас ${model.type}`
    );
  }

  if (model.type === 'main_title') {
    if (model.fontSize === null) {
      throw new Error('fontSize должен быть указан для типа main_title');
    }
    if (model.value.length > 100) {
      throw new Error('Название слишком длинное');
    }
  }
};

const validateModelContent = (model) => {
  if (model.type.includes('view')) {
    if (!model.imageUrl || !model.version) {
      throw new Error('url изображения неправильный или отсутствует');
    }
    model.imageUrl = sanitizeInput(model.imageUrl);
    model.version = sanitizeInput(model.imageUrl);
  }

  if (model.value !== undefined && typeof model.value !== 'string') {
    throw new Error('value должно быть строкой или отсутствовать');
  }

  if (model.type.includes('code')) {
    model.value = sanitizeCodeInput(model.value);
  } else {
    if (model.value) {
      model.value = sanitizeInput(model.value);
    }
  }

  if (model.strong) {
    model.strong = sanitizeInput(model.strong);
  }

  if (model.freshness !== undefined && typeof model.freshness !== 'number') {
    throw new Error('freshness должно быть числом');
  }
};
