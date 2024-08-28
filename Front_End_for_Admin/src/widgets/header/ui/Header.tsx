import { AuthPanel } from "../components/authPanel/ui/AuthPanel";
import styles from './styles/Header.module.css'
import { Logo } from "../components/logo";
import { useDispatch } from "react-redux";
import { AppDispath } from "@/app/model/store/Store";
import { logout } from "@/entities/user";

export const Header = () => {
    //const dispath = useDispatch<AppDispath>();
    //dispath(logout());
    return (
        <div className={styles.header}>
            <Logo></Logo>
            <AuthPanel></AuthPanel>
        </div>
    )
}