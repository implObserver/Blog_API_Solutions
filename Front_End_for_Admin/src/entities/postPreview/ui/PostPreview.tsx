import { useEffect, useState } from "react";
import { loadImage } from "../api/loadImage";
import styles from './styles/PostPreviewStyles.module.css'
import { usePostPreviewContext } from "../lib/context/Context";

export const PostPreview = ({ post }) => {
    const [preview, setPreview] = useState('');
    const folderName = post.elements[1].imageUrl;
    const context = usePostPreviewContext();

    useEffect(() => {
        const loadPreview = async () => {
            const blob = await loadImage(folderName);
            console.log(blob)
            try {
                setPreview(URL.createObjectURL(blob));
            } catch {
                setPreview(null);
            }

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