import { WithRouter } from '../model/providers/WithRouter';
import styles from './styles/App.module.css';
import ErrorBoundary from './errorBoundary/ErrorBoundary';
import { store } from '../model/store/Store';
const isAuth = store.getState().userServices.isAuth;
export const App = () => {
  console.log(isAuth)
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
