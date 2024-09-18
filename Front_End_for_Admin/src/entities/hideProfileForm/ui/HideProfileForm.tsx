import { ProfileForm } from "@/shared/ui/profileForm";
import { useProfileFormContext } from "@/shared/ui/profileForm/lib/context/Context";
import { useState } from "react"
import styles from './style/HideProfileForm.module.css'

export const HideProfileForm = () => {
    const [isHide, setHide] = useState(true);
    const context = useProfileFormContext();

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLElement;
        if (element.textContent === 'Edit') {
            setHide(false);
        }
        if (element.textContent === 'Cancel'
        ) {
            setHide(true);
        }
    }

    if (isHide) {
        return (
            <div onClick={handleClick} className={styles.form_profile_hide}>
                <span>{context.username}</span>
                <button className={styles.button}>Edit</button>
            </div>
        )
    } else {
        return (
            <div onClick={handleClick}>
                <ProfileForm></ProfileForm>
            </div>
        )
    }
}