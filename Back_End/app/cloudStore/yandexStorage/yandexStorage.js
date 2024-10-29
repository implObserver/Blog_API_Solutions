import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  ListObjectsV2Command,
  GetObjectCommand,
  HeadObjectCommand,
} from '@aws-sdk/client-s3';
import url from 'url';

// Конфигурация AWS SDK для Yandex Object Storage
const s3Client = new S3Client({
  endpoint: 'https://storage.yandexcloud.net',
  region: 'ru-central1', // Регион Yandex Cloud
  credentials: {
    accessKeyId: process.env.YANDEX_OBJECT_STORAGE_IDENTIFIER, // Ваш Access Key
    secretAccessKey: process.env.YANDEX_OBJECT_STORAGE_SECRET_KEY, // Ваш Secret Key
  },
});

// Функция загрузки файла в бакет
export const uploadFileToBucket = async (
  bucketName,
  fileName,
  fileContent,
  contentType
) => {
  const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: fileContent,
    ContentType: contentType, // Указание MIME-типа
  };

  try {
    const command = new PutObjectCommand(params);
    const data = await s3Client.send(command);
    console.log(`Файл загружен успешно: ${fileName}`);
    const fileUrl = `https://${bucketName}.storage.yandexcloud.net/${fileName}`;
    return fileUrl;
  } catch (err) {
    console.error('Ошибка загрузки файла:', err);
    throw err;
  }
};

export const deleteFileFromBucket = async (bucketName, fileName) => {
  const params = {
    Bucket: bucketName,
    Key: fileName,
  };

  try {
    const command = new DeleteObjectCommand(params);
    await s3Client.send(command);
    console.log(`Файл удален успешно: ${fileName}`);
  } catch (err) {
    console.error('Ошибка удаления файла:', err);
    throw err;
  }
};

export const deleteAllFilesInFolder = async (bucketName, folderPath) => {
  try {
    const listCommand = new ListObjectsV2Command({
      Bucket: bucketName,
      Prefix: folderPath,
    });

    const { Contents } = await s3Client.send(listCommand);

    if (!Contents) {
      console.log('Файлы для удаления не найдены');
      return;
    }
    for (const item of Contents) {
      const deleteCommand = new DeleteObjectCommand({
        Bucket: bucketName,
        Key: item.Key,
      });
      await s3Client.send(deleteCommand);
      console.log(`Удалён файл: ${item.Key}`);
    }

    console.log('Все файлы в папке удалены успешно');
  } catch (err) {
    console.error('Ошибка при удалении файлов в папке:', err);
    throw err;
  }
};

export const getFileFromBucket = async (bucketName, fileUrl) => {
  // eslint-disable-next-line no-undef
  const { pathname } = new URL(fileUrl);
  const fileName = pathname.slice(1);

  const params = {
    Bucket: bucketName,
    Key: fileName,
  };

  try {
    const command = new GetObjectCommand(params);
    const data = await s3Client.send(command);

    // Чтение содержимого файла
    const fileBuffer = await streamToBuffer(data.Body);
    console.log(`Файл получен успешно: ${fileName}`);
    return fileBuffer;
  } catch (err) {
    if (err.name === 'NoSuchKey') {
      console.error(`Файл не найден: ${fileName}`);
      throw new Error(`Файл не найден: ${fileName}`);
    }
    console.error('Ошибка получения файла:', err.message);
    throw new Error(`Ошибка получения файла: ${err.message}`);
  }
};

export const getFileFromFolder = async (bucketName, folderPath) => {
  const listParams = {
    Bucket: bucketName,
    Prefix: folderPath,
  };

  try {
    const listCommand = new ListObjectsV2Command(listParams);
    const listData = await s3Client.send(listCommand);

    if (!listData.Contents || listData.Contents.length === 0) {
      console.error(`Нет файлов в папке: ${folderPath}`);
      throw new Error(`Нет файлов в папке: ${folderPath}`);
    }

    const fileKey = listData.Contents[0].Key;

    const getParams = {
      Bucket: bucketName,
      Key: fileKey,
    };

    const getCommand = new GetObjectCommand(getParams);
    const fileData = await s3Client.send(getCommand);

    const fileBuffer = await streamToBuffer(fileData.Body);
    console.log(`Файл получен успешно: ${fileKey}`);
    console.log(fileBuffer);
    return fileBuffer;
  } catch (err) {
    if (err.name === 'NoSuchKey') {
      console.error(`Файл не найден в папке: ${folderPath}`);
      throw new Error(`Файл не найден в папке: ${folderPath}`);
    }
    console.error('Ошибка получения файла:', err.message);
    throw new Error(`Ошибка получения файла: ${err.message}`);
  }
};

const streamToBuffer = async (stream) => {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('error', reject);
    // eslint-disable-next-line no-undef
    stream.on('end', () => resolve(Buffer.concat(chunks)));
  });
};

export const getObjectMetadata = async (
  bucketName,
  folderPath,
  defaultPath
) => {
  const listParams = {
    Bucket: bucketName,
    Prefix: folderPath,
  };

  try {
    const listCommand = new ListObjectsV2Command(listParams);
    const listData = await s3Client.send(listCommand);

    if (!listData.Contents || listData.Contents.length === 0) {
      console.warn(
        `Файлы не найдены в папке: ${folderPath}. Используем defaultPath.`
      );
      return await getDefaultMetadata(bucketName, defaultPath);
    }

    const fileName = listData.Contents[0].Key;

    const headParams = {
      Bucket: bucketName,
      Key: fileName,
    };

    const headCommand = new HeadObjectCommand(headParams);
    return await s3Client.send(headCommand);
  } catch (err) {
    console.error('Ошибка получения метаданных:', err);

    return await getDefaultMetadata(bucketName, defaultPath);
  }
};

async function getDefaultMetadata(bucketName, defaultPath) {
  try {
    const defaultParams = {
      Bucket: bucketName,
      Key: defaultPath,
    };

    const defaultCommand = new HeadObjectCommand(defaultParams);
    return await s3Client.send(defaultCommand);
  } catch (error) {
    console.error(
      `Ошибка получения метаданных по defaultPath: ${defaultPath}`,
      error
    );
    throw new Error(
      `Ошибка получения метаданных по defaultPath: ${error.message}`
    );
  }
}
