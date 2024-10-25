import { Profile } from "@/widgets/profile"
import styles from './styles/ProfilePage.module.css'
import { useSelector } from "react-redux";
import { selectUserServices } from "@/entities/user";
import { Posts } from "@/widgets/posts";

export const ProfilePage = () => {
    const services = useSelector(selectUserServices);
    console.log(services.user)
    if (services.isAuthenticated) {
        return (
            <div className={styles.page_profile}>
                <div className={styles.left}>
                    <Profile></Profile>
                </div>
                <div className={styles.right}>
                    <Posts></Posts>
                </div>
            </div>
        )
    } else {
        <div>
            не авторизован
        </div>
    }
}