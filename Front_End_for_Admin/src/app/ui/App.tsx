import { AuthService } from '@/entities/user';
import { WithRouter } from '../model/providers/WithRouter';
import styles from './styles/App.module.css';
import { ScrollRestoration } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

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
