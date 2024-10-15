import { AvatarOfProfile } from "../components/avatarOfProfile"
import { DataOfProfile } from "../components/dataOfProfile"
import { Posts } from "../components/posts"
import styles from './styles/Profile.module.css'

export const Profile = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.wrapper_profile_info}>
                <AvatarOfProfile></AvatarOfProfile>
                <DataOfProfile></DataOfProfile>
            </div>
        </div>
    )
}