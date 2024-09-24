import { ImageContext, UploadAndDisplayImage } from "@/shared/ui/uploadAndDisplayImage";
import { useEffect, useState } from "react";
import styles from './styles/Preview.module.css'
import { useElementContext } from "@/entities/element";

import {
    addPostImage,
    deletePostImage,
    getPostImage
} from "@/entities/user";

export const Preview = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const context = useElementContext();
    const model = context.model;

    useEffect(() => {
        const uploadImage = async () => {
            console.log(model.imageUrl)
            const imageUrl = await getPostImage(model.imageUrl);
            setSelectedImage(imageUrl);
        }
        uploadImage();
    }, [])

    const previewContext: ImageStateContextType = {
        model,
        file: selectedImage,
        setImgFile: setSelectedImage,
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLDivElement;
        if (element.textContent === 'Remove') {
            deletePostImage(model.imageUrl);
        }
    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const context: ImageUpdate = {
            nameFolder: model.imageUrl,
            file: e.target.files[0],
        }
        addPostImage(context);
    }

    return (
        <div onChange={handleChange} onClick={handleClick} className={styles.preview}>
            <ImageContext.Provider value={previewContext}>
                <UploadAndDisplayImage></UploadAndDisplayImage>
            </ImageContext.Provider>
        </div>
    )
}