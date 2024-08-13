import { UploadAndDisplayImage } from "@/shared/ui/uploadAndDisplayImage";
import { ImageContext } from "@/shared/ui/uploadAndDisplayImage/lib/context/Context";
import { useState } from "react";
import styles from './styles/Preview.module.css'
import { useElementContext } from "@/entities/element/lib/context/Context";
import { postImage } from "../api/uploadImage";

export const Preview = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const context = useElementContext();
    const model = context.model;
    if (selectedImage !== null) {
        const lol = postImage(selectedImage);
        console.log(lol)
    }
    const previewContext: ImageStateContextType = {
        model,
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