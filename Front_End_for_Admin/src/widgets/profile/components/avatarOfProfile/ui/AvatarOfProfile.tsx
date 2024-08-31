import { selectUserServices, UserPreview } from "@/entities/user"
import styles from './styles/AvatarOfProfile.module.css'
import { useState } from "react";
import { UploadFile } from "@/features/uploadFile";
import { UploadContext } from "@/features/uploadFile/lib/context/Context.";
import { useSelector } from "react-redux";
import { SpinnerLoader } from "@/shared/ui/spinnerLoader";

export const AvatarOfProfile = () => {
    const pending = useSelector(selectUserServices).isPending;
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
                <UploadFile>
                    <div className={styles.edit}>Edit</div>
                </UploadFile>
            </div>
        )
    }
}