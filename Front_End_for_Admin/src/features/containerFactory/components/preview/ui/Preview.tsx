import { ImageContext, UploadAndDisplayImage } from "@/shared/ui/uploadAndDisplayImage";
import { useEffect, useState } from "react";
import styles from './styles/Preview.module.css'
import { useElementContext } from "@/entities/element";

import {
    addPostImage,
    deletePostImage,
    getPostImage
} from "@/entities/user";
import { getImageByCode, getPostImages } from "@/entities/postPreview/lib/helper/getPostImageFromIDB";
import { useLocation } from "react-router-dom";
import { addPostImages } from "@/entities/postPreview/lib/helper/loadImageToIDB";
import { removePostImage } from "@/entities/postPreview/lib/helper/removePostImageFromIDB";

export const Preview = () => {
    const context = useElementContext();
    const model = context.model;
    const post_id = useLocation().state;
    const [selectedImage, setSelectedImage] = useState(null);

    const verify = async () => {
        const postImages = await getPostImages(post_id);
        console.log(postImages)
        if (postImages === null) {
            const image: ImageType = {
                code: model.imageUrl,
                blob: null,
                isRetry: false,
            }
            addPostImages(post_id, image);
        } else {
            const image = await getImageByCode(post_id, model.imageUrl);
            console.log(image)
            if (image.blob === null && !image.isRetry) {
                uploadImage();
            } else {
                setSelectedImage(image.blob)
            }
        }
    }

    const uploadImage = async () => {
        console.log(model.imageUrl)
        const blob = await getPostImage(model.imageUrl);
        console.log(blob)
        let isRetry = false;
        if (blob === null) {
            isRetry = true;
        }
        const image: ImageType = {
            code: model.imageUrl,
            blob,
            isRetry,
        }
        console.log('wwwwwww')
        setSelectedImage(blob)
        await addPostImages(post_id, image);
    }

    useEffect(() => {
        verify();
    }, [])

    const previewContext: ImageStateContextType = {
        model,
        file: selectedImage,
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLDivElement;
        if (element.textContent === 'Remove') {
            deletePostImage(model.imageUrl);
            removePostImage(post_id, model.imageUrl);
            setSelectedImage(null);
        }
    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const context: ImageUpdate = {
            nameFolder: model.imageUrl,
            file: e.target.files[0],
        }
        const image: ImageType = {
            code: model.imageUrl,
            blob: e.target.files[0],
            isRetry: false,
        }
        addPostImage(context);
        addPostImages(post_id, image);
        setSelectedImage(e.target.files[0]);
    }

    return (
        <div onChange={handleChange} onClick={handleClick} className={styles.preview}>
            <ImageContext.Provider value={previewContext}>
                <UploadAndDisplayImage></UploadAndDisplayImage>
            </ImageContext.Provider>
        </div>
    )
}