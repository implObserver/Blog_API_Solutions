import { Default } from "../components/default"
import { useAvatarContext } from "../lib/context/Context"
import styles from './styles/Avatar.module.css'

export const Avatar = () => {

    //const context = useAvatarContext();
    return (
        <div className={styles.wrapper}>
            <div className={styles.circle}>
                <Default></Default>
            </div>
        </div>
    )
}