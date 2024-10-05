import { usePostPreviewContext } from "@/entities/postPreview/lib/context/Context";
import { getImageByCode } from "@/entities/postPreview/lib/helper/getPostImageFromIDB";
import { loadImage } from "@/entities/postPreview/lib/helper/loadImage";
import { useEffect, useState } from "react";
import styles from './styles/Preview.module.css'
import { addPostImages } from "@/entities/postPreview/lib/helper/loadImageToIDB";

export const Preview = () => {
    const post = usePostPreviewContext().post;
    const folderName = post.elements[1].imageUrl;
    const [preview, setPreview] = useState('');

    useEffect(() => {
        const loadPreview = async () => {
            try {
                const image = (await getImageByCode(post.id, folderName));
                console.log(image)
                if (!image || !image.blob) {
                    loadPreviewOnServer();
                } else {
                    console.log(`blooob ${image.blob}`)
                    setPreview(URL.createObjectURL(image.blob));
                }
            } catch(error) {
                console.log(error)
                setPreview(null);
            }
        }

        const loadPreviewOnServer = async () => {
            const blob = await loadImage(folderName);
            const image: ImageType = {
                code: folderName,
                blob,
            }
            addPostImages(post.id, image);
            setPreview(URL.createObjectURL(blob));
        }

        loadPreview();
    }, [])
    console.log(preview)
    if (preview) {
        return (
            <div className={styles.container}>
                <img
                    className={styles.image}
                    alt="preview"
                    src={preview}
                />
            </div>
        )
    } else {
        return (
            <div className={styles.container}>
                
            </div>
        )
    }
}