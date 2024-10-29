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
        const formData = new FormData();
        formData.append('folderName', model.imageUrl);
        formData.append('postid', params.postid);
        if (element.textContent === 'Remove') {
            deletePostImage(formData);
            removePostImage(postid, model.imageUrl);
            setSelectedImage(null);
        }
    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files[0];
        const compressFile = await compressImage(file);
        const formData = new FormData();
        formData.append('file', compressFile, compressFile.name);
        formData.append('postid', params.postid);
        formData.append('folderName', model.imageUrl);
        formData.append('version', file.lastModified.toString());
        const image: ImageType = {
            code: model.imageUrl,
            version: file.lastModified,
            blob: compressFile,
            isRetry: false,
        }
        addPostImage(formData);
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