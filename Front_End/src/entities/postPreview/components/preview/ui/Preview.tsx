import { useEffect, useState } from "react";
import styles from './styles/Preview.module.css'
import { Link } from "react-router-dom";
import { getAlternative, getClassic, getSlider } from "../lib";
import { loadImage, usePostPreviewContext } from "@/entities/postPreview/lib";


export const Preview = () => {
    const context = usePostPreviewContext();
    const post = context.post;
    const type = context.type;
    const folderName = post.models[1].imageUrl;
    const [preview, setPreview] = useState('');

    const style = type === 'slider'
        ? getSlider()
        : type === 'alter'
            ? getAlternative()
            : getClassic();

    useEffect(() => {
        const loadPreviewOnServer = async () => {
            const blob = await loadImage(folderName);
            const image: ImageType = {
                code: folderName,
                blob,
            }
            setPreview(URL.createObjectURL(blob));
        }

        loadPreviewOnServer();
    }, [])

    if (preview) {
        return (
            <Link
                key={`container_${post.id}`}
                className={style.link}
                to={`/post/${post.id}?slider=true`}
                state={post.id}
            >
                <div className={style.container}>
                    <img
                        className={style.image}
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