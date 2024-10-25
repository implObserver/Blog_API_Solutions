import { selectUserServices } from "@/entities/user"
import styles from './styles/AvatarOfProfile.module.css'
import { useSelector } from "react-redux";
import { SpinnerLoader } from "@/shared/ui/spinnerLoader";
import { UpdateAvatar } from "@/features/updateAvatar";
import { UserAvatarContext } from "@/features/autoUpdateAvatar/lib";
import { AutoUpdateAvatar } from "@/features/autoUpdateAvatar";

export const AvatarOfProfile = () => {
    const service = useSelector(selectUserServices);
    const pending = service.isLoading;
    if (pending) {
        return (
            <>
                <SpinnerLoader></SpinnerLoader>
            </>
        )
    } else {
        return (
            <div className={styles.wrapper_avatar_in_profile}>
                <UserAvatarContext.Provider value={service}>
                    <AutoUpdateAvatar />
                </UserAvatarContext.Provider>
                <UpdateAvatar>
                    <div className={styles.edit}>Edit</div>
                </UpdateAvatar>
            </div>
        )
    }
}