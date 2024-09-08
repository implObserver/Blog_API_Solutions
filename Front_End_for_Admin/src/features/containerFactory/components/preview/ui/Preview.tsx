import { ImageContext, UploadAndDisplayImage } from "@/shared/ui/uploadAndDisplayImage";
import { useEffect, useState } from "react";
import styles from './styles/Preview.module.css'
import { useElementContext } from "@/entities/element";
import { useDispatch } from "react-redux";
import { AppDispath } from "@/app/model/store/Store";
import { loadImage } from "../api/loadImage";
import { uploadImage } from "../api/uploadImage";
import { deleteImage } from "../api/deleteImage";
import { updatePost } from "@/entities/user/model/slice/services/thunks/update/updatePost";
import { saveWork } from "@/entities/user/lib/helper/saveWork";
import { useLocation } from "react-router-dom";

export const Preview = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const context = useElementContext();
    const model = context.model;
    const index = useLocation().state;
    useEffect(() => {
        const uploadImage = async () => {
            console.log(model.imageUrl)
            const imageUrl = await loadImage(model.imageUrl);
            setSelectedImage(imageUrl);
        }
        uploadImage();
    }, [])

    const previewContext: ImageStateContextType = {
        model,
        file: selectedImage,
        setImgFile: setSelectedImage,
    }
    console.log(`imageID ${model.imageUrl}`)

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLDivElement;
        if (element.textContent === 'Remove') {
            deleteImage(model.imageUrl);
        }
    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const context: ImageUpdate = {
            nameFolder: model.imageUrl,
            file: e.target.files[0],
        }
        uploadImage(context);
    }

    return (
        <div onChange={handleChange} onClick={handleClick} className={styles.preview}>
            <ImageContext.Provider value={previewContext}>
                <UploadAndDisplayImage></UploadAndDisplayImage>
            </ImageContext.Provider>
        </div>
    )
}