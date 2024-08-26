import { ImageContext, UploadAndDisplayImage } from "@/shared/ui/uploadAndDisplayImage";
import { useState } from "react";
import styles from './styles/Preview.module.css'
import { postImage } from "../api/uploadImage";
import { useElementContext } from "@/entities/element";

export const Preview = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const context = useElementContext();
    const model = context.model;

    const previewContext: ImageStateContextType = {
        model,
        file: selectedImage,
        setImgFile: setSelectedImage,
    }

    function getBase64(file: File) {
        return new Promise((resolve, reject) => {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                resolve(reader.result)
            };
            reader.onerror = reject
        })
    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        postImage(e.target.files[0])
    }

    return (
        <div onChange={handleChange} className={styles.preview}>
            <ImageContext.Provider value={previewContext}>
                <UploadAndDisplayImage></UploadAndDisplayImage>
            </ImageContext.Provider>
        </div>
    )
}