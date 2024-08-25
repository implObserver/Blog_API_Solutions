import { UserPreview } from "@/entities/user"
import styles from './styles/AvatarOfProfile.module.css'
import { useState } from "react";
import { UploadFile } from "@/features/uploadFile";
import { UploadContext } from "@/features/uploadFile/lib/context/Context.";

export const AvatarOfProfile = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const uploadContext: UploadContextType = {
        setImgFile: setSelectedImage,
    }

    return (
        <div>
            <div className={styles.wrapper_avatar_in_profile}>
                <UserPreview></UserPreview>
                <UploadContext.Provider value={uploadContext}>
                    <UploadFile>
                        <div className={styles.edit}>Edit</div>
                    </UploadFile>
                </UploadContext.Provider>
            </div>
        </div>
    )
}