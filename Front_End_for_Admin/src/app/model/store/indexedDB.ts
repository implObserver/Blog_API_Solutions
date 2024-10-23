import { openDB } from "idb";

export const dbPromise = openDB('blog_api_creater_idb', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('posts')) {
      db.createObjectStore('posts', { keyPath: 'post_id' });
    }
  },
});
