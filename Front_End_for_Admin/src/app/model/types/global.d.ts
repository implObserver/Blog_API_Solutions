declare module '*.css' {
  const classNames: Record<string, string>;
  export default classNames;
}

declare module '*.jpg';
declare module '*.webp';
declare module '*.svg';
declare module '*.json';

interface AuthStates {
  isAuth: boolean,
  isAuthInProgress: boolean,
}