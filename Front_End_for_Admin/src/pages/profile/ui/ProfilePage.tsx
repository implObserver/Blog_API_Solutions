import { Header } from "@/widgets/header"
import { Profile } from "@/widgets/profile"
import styles from './styles/ProfilePage.module.css'
import { useDispatch, useSelector } from "react-redux";
import { selectUserServices } from "@/entities/user";
import { FastAuth } from "@/features/fastAuth/ui/FastAuth";
import { Posts } from "@/widgets/posts";
import { AppDispath } from "@/app/model/store/Store";
import { useEffect } from "react";
import { postsActions } from "@/entities/postState/model/slice/posts/slice";

export const ProfilePage = () => {
    const services = useSelector(selectUserServices);

    if (services.isAuth) {
        return (
            <div className={styles.page_profile}>
                <Profile></Profile>
                <Posts></Posts>
            </div>
        )
    } else {
        <div>
            не авторизован
        </div>
    }
}