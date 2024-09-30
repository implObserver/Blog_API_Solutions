import styles from './styles/Header.module.css'
import { Logo } from "../components/logo";
import { AuthPanel } from '../components/authPanel';

export const Header = () => {
    return (
        <div className={styles.header}>
            <Logo></Logo>
            <AuthPanel></AuthPanel>
        </div>
    )
}