import { useEffect, useState } from "react";
import styles from './styles/PostPreviewStyles.module.css'
import { usePostPreviewContext } from "../lib/context/Context";
import { getImageByCode } from "../lib/helper/getPostImageFromIDB";
import { loadImage } from "../lib/helper/loadImage";
import { addPostImages } from "../lib/helper/loadImageToIDB";

export const PostPreview = ({ post }) => {
    const [preview, setPreview] = useState('');
    const folderName = post.elements[1].imageUrl;
    const context = usePostPreviewContext();

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
            } catch (error) {
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

    if (preview) {
        return (
            <div className={styles.container}>
                <img
                    className={styles.image}
                    alt="preview"
                    src={preview}
                />
                <span className={styles.post_name}>
                    {post.title}
                </span>
                <div className={styles.delete}>
                    {context.deleteFeature}
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.container}>
                <div className={styles.default_name}>{post.title}</div>
                <div className={styles.delete}>
                    {context.deleteFeature}
                </div>
            </div>
        )
    }
}