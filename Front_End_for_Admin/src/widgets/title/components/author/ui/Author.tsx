import { selectUserServices } from "@/entities/user"
import { useDispatch, useSelector } from "react-redux"
import styles from './styles/Author.module.css'
import { AppDispath } from "@/app/model/store/Store";
import { getVirtualAuthor } from "@/entities/postState/lib/helper/getVirtualAuthor";
import { virtualPostActions } from "@/entities/postState";

export const Author = () => {
    const user = useSelector(selectUserServices).user;
    const author = getVirtualAuthor();
    const dispatch = useDispatch<AppDispath>();

    const handleKeyUp = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(virtualPostActions.updateAuthor(e.target.value));
    };

    return (
        <div className={styles.container}>
            <span className={styles.creator}>
                Creator:
                <span>{user.username}</span>
            </span>
            <span className={styles.author}>
                Author:
                <input
                    type="text"
                    placeholder="Enter Author"
                    defaultValue={author ? author : user.username}
                    onChange={handleKeyUp}
                    maxLength={20}
                    className={styles.input} />
            </span>
        </div>
    )
}