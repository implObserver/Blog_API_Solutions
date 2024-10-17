import { openDB } from "idb";

export const dbPromise = openDB('blog_api_creater_idb', 1, {
  upgrade(db) {
    const objectStore = db.createObjectStore('posts', { keyPath: 'post_id' });
    const avatarStore = db.createObjectStore('avatar', { keyPath: 'post_id' });
  },
});
