import { Default } from "../components/default"
import { useAvatarContext } from "../lib/context/Context"
import styles from './styles/Avatar.module.css'

export const Avatar = () => {
    const context = useAvatarContext();
    return (
        <div className={styles.wrapper}>
            <div className={styles.circle}>
                {context.image === null
                    ? <Default></Default>
                    : <img className={styles.img}
                        alt="avatar"
                        src={context.image} />}
            </div>
        </div>
    )
}