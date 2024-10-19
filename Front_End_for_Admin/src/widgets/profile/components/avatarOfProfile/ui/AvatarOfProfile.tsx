import { selectUserServices, UserPreview } from "@/entities/user"
import styles from './styles/AvatarOfProfile.module.css'
import { UploadContext, UploadFile } from "@/features/uploadFile";
import { useSelector } from "react-redux";
import { SpinnerLoader } from "@/shared/ui/spinnerLoader";
import { useState } from "react";
import { useCustomState } from "@/shared/lib";

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
                <UploadFile>
                    <div className={styles.edit}>Edit</div>
                </UploadFile>
            </div>
        )
    }
}