import B2 from 'backblaze-b2';

export const b2 = new B2({
  applicationKeyId: process.env.BACKBLAZE_KEY_ID, // KeyID
  applicationKey: process.env.BACKBLAZE_APPLICATION_KEY, // Application Key
});

// Авторизация
const authorize = async () => {
  try {
    await b2.authorize();
    console.log('Successfully authorized!');
  } catch (err) {
    console.error('Authorization failed:', err);
  }
};

authorize();
