import { ImageContext, UploadAndDisplayImage } from "@/shared/ui/uploadAndDisplayImage";
import { useEffect, useState } from "react";
import styles from './styles/Preview.module.css'
import { useElementContext } from "@/entities/element";
import { addPostImage, deletePostImage } from "@/entities/user";
import { getPostImages } from "@/entities/postPreview/lib/helper/getPostImageFromIDB";
import { useLocation } from "react-router-dom";
import { addPostImages } from "@/entities/postPreview/lib/helper/loadImageToIDB";
import { removePostImage } from "@/entities/postPreview/lib/helper/removePostImageFromIDB";
import { addPlaceholderImageToPost } from "../lib/helper/addPlaceholderImageToPost";
import { handleExistingPostImages } from "../lib/helper/uploadImage";

export const Preview = () => {
    const context = useElementContext();
    const model = context.model;
    const post_id = useLocation().state;
    const [selectedImage, setSelectedImage] = useState(null);

    const verifyPostImages = async () => {
        const postImages = await getPostImages(post_id);
        if (postImages === null) {
            await addPlaceholderImageToPost(post_id, model);
        }
        const blob = await handleExistingPostImages(post_id, model);
        setSelectedImage(blob);
    };

    useEffect(() => {
        verifyPostImages();
    }, []);

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