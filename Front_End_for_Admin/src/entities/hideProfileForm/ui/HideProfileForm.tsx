import { ProfileForm } from "@/shared/ui/profileForm";
import { useProfileFormContext } from "@/shared/ui/profileForm/lib/context/Context";
import { useState } from "react"
import styles from './style/HideProfileForm.module.css'

export const HideProfileForm = () => {
    const [isHide, setHide] = useState(true);
    const context = useProfileFormContext();

    const handleClick = () => {
        setHide(false);
    }

    const handleClick2 = () => {
        setHide(true);
    }

    if (isHide) {
        return (
            <div className={styles.form_profile_hide}>
                <span>{context.username}</span>
                <button onClick={handleClick}>Edit</button>
            </div>
        )
    } else {
        return (
            <>
                <ProfileForm></ProfileForm>
                <button className={styles.cancel} onClick={handleClick2}>Cancel</button>
            </>
        )
    }
}