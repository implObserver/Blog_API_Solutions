import { selectUserServices } from "@/entities/user"
import { UpdateOfProfile } from "@/features/updateOfProfile"
import styles from './styles/DataOfProfile.module.css'

export const DataOfProfile = () => {
    return (
        <div className={styles.data_of_profile}>
            <UpdateOfProfile></UpdateOfProfile>
        </div>
    )
}