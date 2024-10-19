import { selectUserServices } from "@/entities/user"
import { useDispatch, useSelector } from "react-redux"
import styles from './styles/Author.module.css'
import { AppDispath } from "@/app/model/store/Store";
import { selectOpenedPost } from "@/entities/postState/model/slice/openedPost/selectors";
import { virtualPostActions } from "@/entities/element";
import { getVirtualAuthor } from "@/entities/element/lib/helper/getVirtualAuthor";

export const Author = () => {
    const user = useSelector(selectUserServices).user;
    const postService = useSelector(selectOpenedPost);
    const post = postService.openedPost;
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