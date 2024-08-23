import { AuthPanel } from "../components/authPanel/ui/AuthPanel";
import styles from './styles/Header.module.css'
import { Logo } from "../components/logo";

export const Header = () => {
    return (
        <div className={styles.header}>
            <Logo></Logo>
            <AuthPanel></AuthPanel>
        </div>
    )
}