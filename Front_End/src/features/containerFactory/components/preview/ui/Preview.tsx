import { ImageContext, UploadAndDisplayImage } from "@/shared/ui/displayImage";
import { useEffect, useState } from "react";
import styles from './styles/Preview.module.css'
import { useElementContext } from "@/entities/element";
import { handleExistingPostImages } from "../lib/helper/uploadImage";
import { useParams } from "react-router-dom";

export const Preview = () => {
    const context = useElementContext();
    const model = context.model;
    const params = useParams();
    const postid = parseInt(params.postid);
    const [selectedImage, setSelectedImage] = useState(null);

    const verifyPostImages = async () => {
        const blob = await handleExistingPostImages(postid, model);
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