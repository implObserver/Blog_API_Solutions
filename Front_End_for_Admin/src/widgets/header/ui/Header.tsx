import { AuthPanel } from "../components/authPanel/ui/AuthPanel";
import styles from './styles/Header.module.css'
import { Logo } from "../components/logo";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath } from "@/app/model/store/Store";
import { logout, selectUserServices } from "@/entities/user";
import Cookies from 'js-cookie'

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