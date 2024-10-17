import React, { ErrorInfo } from 'react';

interface Props {
  children: React.ReactNode; // Дочерние компоненты, которые будут обернуты в ErrorBoundary
}

interface State {
  hasError: boolean; // Состояние для отслеживания наличия ошибки
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false }; // Инициализация состояния
  }

  // Метод вызывается при возникновении ошибки в дочерних компонентах
  static getDerivedStateFromError(error: Error) {
    // Обновляет состояние, чтобы показать запасной UI при ошибке
    return { hasError: true };
  }

  // Метод для логирования ошибки или отправки её на сервер
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    // Можно добавить логику для отправки информации об ошибке на сервер
  }

  render() {
    if (this.state.hasError) {
      // Отображение запасного UI при ошибке
      return <h1>Что-то пошло не так. Попробуйте перезагрузить страницу.</h1>;
    }

    // Если ошибки нет, рендерим дочерние компоненты
    return this.props.children; 
  }
}

export default ErrorBoundary;
