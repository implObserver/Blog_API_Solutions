import { usePostPreviewContext } from "@/entities/postPreview/lib/context/Context";
import { getImageByCode } from "@/entities/postPreview/lib/helper/getPostImageFromIDB";
import { loadImage } from "@/entities/postPreview/lib/helper/loadImage";
import { useEffect, useState } from "react";
import styles from './styles/Preview.module.css'
import { addPostImages } from "@/entities/postPreview/lib/helper/loadImageToIDB";
import { Link } from "react-router-dom";
import { useAlterPostPreviewContext } from "@/entities/alterPostPreview/lib/context/Context";

export const Preview = () => {
    const [preview, setPreview] = useState('');
    const post: Post = useAlterPostPreviewContext().post;
    const folderName = post.models[1].imageUrl;

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
    console.log(preview)
    if (preview) {
        return (
            <Link
                key={`container_${post.id}`}
                className={styles.link}
                to={`/post/${post.id}`}
                state={post.id}
            >
                <div className={styles.container}>
                    <img
                        className={styles.image}
                        alt="preview"
                        src={preview}
                    />
                </div>
            </Link>
        )
    } else {
        return (
            <div className={styles.container} />
        )
    }
}