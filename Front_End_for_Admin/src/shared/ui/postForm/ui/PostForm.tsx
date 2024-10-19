import { getPostId } from '@/shared/lib';
import { usePostFormContext } from '../lib/context/Context';
import styles from './styles/PostForm.module.css'

export const PostForm = () => {
    const id = getPostId();
    const context = usePostFormContext();

    const data = {
        title: context.data.title,
    }

    const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newData = { ...data };
        const parts = e.target.id.split('_');
        newData[parts[parts.length - 1]] = e.target.value
        context.setData(newData);
    }

    return (
        <form className={styles.form_user}>
            <div className={styles.form_group}>
                <label htmlFor="title">Post Title:</label>
                <input
                    onChange={handle}
                    className={styles.input}
                    id={`${id}_title`}
                    name="title"
                    type="text"
                    placeholder="Enter a name of this post"
                    value={data.title}
                    autoComplete="on"
                    required>
                </input>

            </div>
            <div className={styles.container_buttons}>
                <button className={`${styles.button} ${styles.save}`} type='submit'>Save</button>
                <button className={styles.button} type='submit'>Cancel</button>
            </div>
        </form>
    )
}