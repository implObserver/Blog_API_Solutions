import { AvatarOfProfile } from "../components/avatarOfProfile/ui/AvatarOfProfile"
import { DataOfProfile } from "../components/dataOfProfile/ui/DataOfProfile"
import styles from './styles/Profile.module.css'

export const Profile = () => {
    return (
        <div className={styles.profile}>
            <div>
                <AvatarOfProfile></AvatarOfProfile>
                <DataOfProfile></DataOfProfile>
            </div>
            <div >
                <div className={styles.wrapper_posts_info}>

                </div>
            </div>
        </div>
    )
}