import { ProfileForm, useProfileFormContext } from "@/shared/ui/profileForm";
import { useState } from "react"
import styles from './style/HideProfileForm.module.css'

export const ToggleProfileForm = () => {
    const [isFormHidden, setFormHidden] = useState(true);
    const context = useProfileFormContext();

    const handleButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLElement;
        if (element.textContent === 'Edit') {
            setFormHidden(false);
        } else if (element.textContent === 'Cancel') {
            setFormHidden(true);
        }
    };

    return (
        <div onClick={handleButtonClick} className={isFormHidden ? styles.form_profile_hide : ''}>
            {isFormHidden ? (
                <>
                    <span>{context.username}</span>
                    <button className={styles.button}>Edit</button>
                </>
            ) : (
                <ProfileForm />
            )}
        </div>
    );
};