import styles from './styles/CommentArea.module.css'

export const CommentArea = () => {
    return (
        <div className={styles.container}>
            <textarea
                className={styles.area_comment}
                name="comment"
                id="comment"
                maxLength={1500}
                placeholder='Enter your comment'
            >
            </textarea>
        </div>
    )
}