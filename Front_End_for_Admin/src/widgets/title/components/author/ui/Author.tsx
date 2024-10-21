import { selectUserServices } from "@/entities/user"
import { useSelector } from "react-redux"
import styles from './styles/Author.module.css'
import { virtualPostActions } from "@/entities/postState";
import { useEffect } from "react";
import { getVirtualAuthor, useAppDispatch } from "@/shared/lib";

export const Author = () => {
    const user = useSelector(selectUserServices).user;
    const author = getVirtualAuthor();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!author) {
            dispatch(virtualPostActions.updateAuthor(user.username));
        }
    })
    
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
                    defaultValue={author}
                    onChange={handleKeyUp}
                    maxLength={20}
                    className={styles.input} />
            </span>
        </div>
    )
}