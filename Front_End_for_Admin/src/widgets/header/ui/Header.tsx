import { AuthPanel } from "../components/authPanel/ui/AuthPanel";
import styles from './styles/Header.module.css'
import { Logo } from "../components/logo";
import { useSelector } from "react-redux";
import { selectUserServices } from "@/entities/user";

export const Header = () => {
    //const user = useSelector(selectUserServices).user;

    return (
        <div className={styles.header}>
            <Logo></Logo>
            <AuthPanel></AuthPanel>
        </div>
    )
}