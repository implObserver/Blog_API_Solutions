import { openDB } from "idb";

// Функция для открытия базы данных
export const dbPromise = openDB('myDatabase', 1, {
  upgrade(db) {
    // Создаем объектное хранилище с ключом
    const objectStore = db.createObjectStore('posts', { keyPath: 'post_id' });
  },
});
