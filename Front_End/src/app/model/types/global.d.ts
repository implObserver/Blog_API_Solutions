declare module '*.css' {
  const classNames: Record<string, string>;
  export default classNames;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
interface ImportMetaEnv {
  VITE_SERVER_URL: string; // Замените на ваши переменные окружения
}

declare module '*.jpg';
declare module '*.webp';
declare module '*.svg';
declare module '*.json';