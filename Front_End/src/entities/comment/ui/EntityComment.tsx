import styles from './styles/EntityComment.module.css'
import { Menu } from "../components/menu";
import { Comment } from '@/shared/ui/comment';

export const EntityComment = ({ isMyComment }) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                {isMyComment
                    ? <Menu></Menu>
                    : <></>
                }
            </div>
            <div className={styles.comment}>
                <Comment></Comment>
            </div>
        </div>
    )
};