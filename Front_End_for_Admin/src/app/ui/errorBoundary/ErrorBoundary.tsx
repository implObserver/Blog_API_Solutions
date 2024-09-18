import React, { ErrorInfo } from 'react';

// Определяем тип для пропсов
interface Props {
  children: React.ReactNode;
}

// Создаем класс ErrorBoundary
class ErrorBoundary extends React.Component<Props, { hasError: boolean }> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Обновляем состояние, чтобы следующий рендер показал запасной интерфейс
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Вы можете записать ошибку в лог или отправить ее на сервер
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Выводим запасной интерфейс при возникновении ошибки
      return <h1>Что-то пошло не так.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
