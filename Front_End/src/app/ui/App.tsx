import { WithRouter } from '../model/providers/WithRouter';
import styles from './styles/App.module.css';

export const App = () => {
  return (
    <>
      <div className={styles.app}>
        <WithRouter></WithRouter>
      </div>
    </>
  );
};

export default App;
