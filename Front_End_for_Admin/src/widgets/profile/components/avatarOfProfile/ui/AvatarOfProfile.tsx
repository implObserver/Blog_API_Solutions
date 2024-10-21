import { selectUserServices, UserPreview } from "@/entities/user"
import styles from './styles/AvatarOfProfile.module.css'

import { useSelector } from "react-redux";
import { SpinnerLoader } from "@/shared/ui/spinnerLoader";
import { UpdateAvatar } from "@/features/updateAvatar";

export const AvatarOfProfile = () => {
    const pending = useSelector(selectUserServices).isLoading;
    if (pending) {
        return (
            <>
                <SpinnerLoader></SpinnerLoader>
            </>
        )
    } else {
        return (
            <div className={styles.wrapper_avatar_in_profile}>
                <UserPreview></UserPreview>
                <UpdateAvatar>
                    <div className={styles.edit}>Edit</div>
                </UpdateAvatar>
            </div>
        )
    }
}