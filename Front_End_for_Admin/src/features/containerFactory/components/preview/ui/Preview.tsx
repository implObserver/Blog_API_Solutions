import { UploadAndDisplayImage } from "@/shared/ui/uploadAndDisplayImage";
import { ImageContext } from "@/shared/ui/uploadAndDisplayImage/lib/context/Context";
import { useState } from "react";
import styles from './styles/Preview.module.css'

export const Preview = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const previewContext: ImageStateContextType = {
        file: selectedImage,
        setImgFile: setSelectedImage,
    }

    return (
        <div className={styles.preview}>
            <ImageContext.Provider value={previewContext}>
                <UploadAndDisplayImage></UploadAndDisplayImage>
            </ImageContext.Provider>
        </div>
    )
}