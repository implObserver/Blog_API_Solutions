import { ImageContext, UploadAndDisplayImage } from "@/shared/ui/displayImage";
import { useEffect, useState } from "react";
import styles from './styles/Preview.module.css'
import { useElementContext } from "@/entities/element";
import { loadImage } from "@/entities/postPreview";

export const Preview = () => {
    const context = useElementContext();
    const model = context.model;
    const [selectedImage, setSelectedImage] = useState(null);

    const verifyPostImages = async () => {
        const blob = await loadImage(model.imageUrl);
        setSelectedImage(blob);
    };

    useEffect(() => {
        verifyPostImages();
    }, []);

    const previewContext: ImageStateContextType = {
        model,
        file: selectedImage,
    }

    return (
        <div className={styles.preview}>
            <ImageContext.Provider value={previewContext}>
                <UploadAndDisplayImage></UploadAndDisplayImage>
            </ImageContext.Provider>
        </div>
    )
}