import { useState } from "react"
import styles from './style/HidePostForm.module.css'
import { PostForm } from "@/shared/ui/postForm";

export const TogglePostForm = () => {
    const [isFormHidden, setFormHidden] = useState(true);

    const handleButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLElement;
        if (element.textContent === 'Add') {
            setFormHidden(false);
        } else if (element.textContent === 'Cancel') {
            setFormHidden(true);
        }
    };

    return (
        <div onClick={handleButtonClick} className={isFormHidden ? styles.form_profile_hide : ''}>
            {isFormHidden ? (
                <button className={styles.add_btn}>Add</button>
            ) : (
                <PostForm />
            )}
        </div>
    );
};