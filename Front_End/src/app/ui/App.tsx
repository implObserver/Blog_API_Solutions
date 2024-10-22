import { WithRouter } from '../model/providers/WithRouter';
import styles from './styles/App.module.css';
import ErrorBoundary from './errorBoundary/ErrorBoundary';

export const App = () => {
  return (
    <>
      <div className={styles.app}>
        <ErrorBoundary>
          <WithRouter />
        </ErrorBoundary>
      </div>
    </>
  );
};

export default App;
