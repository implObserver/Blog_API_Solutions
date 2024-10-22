import styles from './styles/Header.module.css'
import { Logo } from "../components/logo";
import { AuthPanel } from '../components/authPanel';
import { Tags } from '../components/tags';

export const Header = () => {
    return (
        <div className={styles.header}>
            <Logo></Logo>
            <Tags></Tags>
            <AuthPanel></AuthPanel>
        </div>
    )
}