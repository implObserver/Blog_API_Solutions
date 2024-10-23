import { ImageContext, UploadAndDisplayImage } from "@/shared/ui/uploadAndDisplayImage";
import { useEffect, useState } from "react";
import styles from './styles/Preview.module.css'
import { useElementContext } from "@/entities/element";
import { useParams } from "react-router-dom";
import { removePostImage } from "@/entities/postPreview/lib/helper/indexedDB/removePostImage";
import { handleExistingPostImages } from "../lib/helper/uploadImage";
import { addPostImage } from "@/entities/postState/model/slice/openedPost/thunks/post/addPostImage";
import { deletePostImage } from "@/entities/postState/model/slice/openedPost/thunks/delete/deletePostImage";
import { savePostImage } from "@/entities/postPreview/lib";
import { compressImage } from "@/shared/lib";

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

    const previewContext: ImageContext = {
        model,
        file: selectedImage,
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLDivElement;
        if (element.textContent === 'Remove') {
            deletePostImage(model.imageUrl);
            removePostImage(postid, model.imageUrl);
            setSelectedImage(null);
        }
    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files[0];
        const compressFile = await compressImage(file);
        const context: ImageUpdate = {
            folderName: model.imageUrl,
            file: file,
            version: file.lastModified.toString(),
        }
        const image: ImageType = {
            code: model.imageUrl,
            version: file.lastModified.toString(),
            blob: compressFile,
            isRetry: false,
        }
        addPostImage(context);
        savePostImage(postid, image);
        setSelectedImage(file);
    }

    return (
        <div onChange={handleChange} onClick={handleClick} className={styles.preview}>
            <ImageContext.Provider value={previewContext}>
                <UploadAndDisplayImage></UploadAndDisplayImage>
            </ImageContext.Provider>
        </div>
    )
}