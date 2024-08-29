import { AvatarOfProfile } from "../components/avatarOfProfile/ui/AvatarOfProfile"
import { DataOfProfile } from "../components/dataOfProfile/ui/DataOfProfile"
import { Posts } from "../components/posts"
import styles from './styles/Profile.module.css'

export const Profile = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.wrapper_profile_info}>
                <AvatarOfProfile></AvatarOfProfile>
                <DataOfProfile></DataOfProfile>
            </div>
            <div >
                <div className={styles.wrapper_posts_info}>
                    <div>
                        <Posts></Posts>
                    </div>
                </div>
            </div>
        </div>
    )
}