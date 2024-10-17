import { Comment } from "@/shared/ui/comment/ui/Comment";
import styles from './styles/EntityComment.module.css'
import { Menu } from "../components/menu/ui/Menu";

export const EntityComment = () => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Menu></Menu>
            </div>
            <div className={styles.comment}>
                <Comment></Comment>
            </div>
        </div>
    )
};