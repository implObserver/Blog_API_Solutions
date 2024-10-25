import { Avatar } from "@/shared/ui/avatar"
import styles from './styles/Preview.module.css'

const homeUrl = import.meta.env.VITE_CREATOR_URL;

export const UserAvatar = () => {
    return (
        <div className={styles.container}>
            <Avatar></Avatar>
        </div>
    )
}