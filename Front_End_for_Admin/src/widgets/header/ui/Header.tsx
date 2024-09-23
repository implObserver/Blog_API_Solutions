import styles from './styles/Header.module.css'
import { Logo } from "../components/logo";
import { useSelector } from "react-redux";
import { selectUserServices } from "@/entities/user";
import { AuthPanel } from '../components/authPanel';

export const Header = () => {
    console.log('wtf')
    return (
        <div className={styles.header}>
            <Logo></Logo>
            <AuthPanel></AuthPanel>
        </div>
    )
}