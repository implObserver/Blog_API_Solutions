import { useEffect, useState } from "react";
import styles from './styles/PostPreviewStyles.module.css'
import { usePostPreviewContext } from "../lib/context/Context";
import { getImageByCode } from "../lib/helper/getPostImageFromIDB";
import { loadImage } from "../lib/helper/loadImage";

export const PostPreview = ({ post }) => {
    const [preview, setPreview] = useState('');
    const folderName = post.elements[1].imageUrl;
    const context = usePostPreviewContext();

    useEffect(() => {
        const loadPreview = async () => {
            try {
                const blob = (await getImageByCode(post.id, folderName)).blob;
                console.log(blob)
                if (blob === null || blob === undefined) {
                    await loadPreviewOnServer();
                } else {
                    setPreview(URL.createObjectURL(blob));
                }
            } catch {
                setPreview(null);
            }
        }

        const loadPreviewOnServer = async () => {
            const blob = await loadImage(folderName);
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