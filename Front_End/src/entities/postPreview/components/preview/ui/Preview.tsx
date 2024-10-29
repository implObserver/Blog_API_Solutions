import { useEffect, useState } from "react";
import styles from './styles/Preview.module.css'
import { Link } from "react-router-dom";
import { getAlternative, getClassic, getSlider } from "../lib";
import { getImageByCode, loadImage, savePostImage, usePostPreviewContext } from "@/entities/postPreview/lib";
import { getLastModified } from "@/entities/postPreview/lib/helper/response/getLastModified";


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
        const loadPreview = async () => {
            try {
                const image = (await getImageByCode(post.id, folderName));
                if (!image || !image.blob) {
                    loadPreviewOnServer();
                } else {
                    const formData = new FormData();
                    formData.append('postid', post.id.toString());
                    formData.append('folderName', folderName);
                    const lastVersion = await getLastModified(formData);
                    console.log(`last ${lastVersion} current ${image.version}`)
                    if (lastVersion !== image.version) {
                        loadPreviewOnServer();
                    } else {
                        setPreview(URL.createObjectURL(image.blob));
                    }
                }
            } catch (error) {
                setPreview(null);
            }
        }

        const loadPreviewOnServer = async () => {
            const formData = new FormData();
            formData.append('postid', post.id.toString());
            formData.append('folderName', folderName);
            const blob = await loadImage(formData);
            console.log(blob.lastModified)
            const image: ImageType = {
                code: folderName,
                version: blob.lastModified,
                blob: blob,
            }
            savePostImage(post.id, image);
            setPreview(URL.createObjectURL(blob));
        }
        loadPreview();
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