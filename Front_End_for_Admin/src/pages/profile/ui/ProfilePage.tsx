import { Header } from "@/widgets/header"
import { Profile } from "@/widgets/profile"
import styles from './styles/ProfilePage.module.css'
import { useSelector } from "react-redux";
import { selectUserServices } from "@/entities/user";

export const ProfilePage = () => {
    const services = useSelector(selectUserServices);
    if (services.isAuth) {
        return (
            <div className={styles.page_profile}>
                <Header></Header>
                <Profile></Profile>
            </div>
        )
    } else {
        window.location.href = "http://localhost:5000/";
    }
}