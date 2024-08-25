import { Default } from "../components/default"
import { useAvatarContext } from "../lib/context/Context"
import styles from './styles/Avatar.module.css'

export const Avatar = () => {

    const context = useAvatarContext();
    return (
        <div className={styles.wrapper}>
            <div className={styles.circle}>
                {context.image === 'default'
                    ? <Default></Default>
                    : context.image instanceof File
                        ? <img className={styles.img}
                            alt="avatar"
                            src={URL.createObjectURL(context.image)} />
                        : <div>error</div>}
            </div>
        </div>
    )
}