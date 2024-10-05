import { Header } from "@/widgets/header"
import { Profile } from "@/widgets/profile"
import styles from './styles/ProfilePage.module.css'
import { useSelector } from "react-redux";
import { selectUserServices } from "@/entities/user";
import { FastAuth } from "@/features/fastAuth/ui/FastAuth";

export const ProfilePage = () => {
    const services = useSelector(selectUserServices);
    if (services.isAuth) {
        return (
            <div className={styles.page_profile}>
                <Profile></Profile>
            </div>
        )
    } else {
        return (
            <div>
                <FastAuth></FastAuth>
            </div>
        )
    }
}