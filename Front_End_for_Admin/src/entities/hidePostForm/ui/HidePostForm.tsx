import { useState } from "react"
import styles from './style/HidePostForm.module.css'
import { PostForm } from "@/shared/ui/postForm/ui/PostForm";

export const HidePostForm = () => {
    const [isHide, setHide] = useState(true);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLElement;
        if (element.textContent === 'Add') {
            setHide(false);
        }
        if (element.textContent === 'Cancel') {
            setHide(true);
        }
    }

    if (isHide) {
        return (
            <div onClick={handleClick} className={styles.form_profile_hide}>
                <button className={styles.button}>Add</button>
            </div>
        )
    } else {
        return (
            <div onClick={handleClick}>
                <PostForm></PostForm>
            </div>
        )
    }
}