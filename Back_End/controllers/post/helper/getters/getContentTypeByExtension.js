export const getContentTypeByExtension = (extname) => {
  switch (extname.toLowerCase()) {
    case '.avif':
      return 'image/avif';
    case '.jpeg':
    case '.jpg':
      return 'image/jpeg';
    case '.png':
      return 'image/png';
    case '.webp':
      return 'image/webp';
    case '.gif':
      return 'image/gif';
    case '.svg':
      return 'image/svg+xml';
    case '.bmp':
      return 'image/bmp';
    case '.tiff':
    case '.tif':
      return 'image/tiff';
    case '.ico':
      return 'image/x-icon';
    case '.heic':
    case '.heif':
      return 'image/heif';
    default:
      return 'application/octet-stream';
  }
};
