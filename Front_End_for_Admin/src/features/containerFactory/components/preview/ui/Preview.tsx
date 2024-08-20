import { ImageContext, UploadAndDisplayImage } from "@/shared/ui/uploadAndDisplayImage";
import { useState } from "react";
import styles from './styles/Preview.module.css'
import { postImage } from "../api/uploadImage";
import { useElementContext } from "@/entities/element";

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