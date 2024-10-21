import { useEffect, useState } from "react";
import styles from './styles/PostPreviewStyles.module.css'
import { Link, useParams } from "react-router-dom";
import { getFormattedDate } from "@/shared/lib";
import { getImageByCode, savePostImage, loadImage } from "../lib";
import { Menu } from "../components/menu";

export const PostPreview = ({ post }) => {
    const [preview, setPreview] = useState('');
    const folderName = post.models[1].imageUrl;
    const date = new Date(post.postingDate);
    const postingDate = getFormattedDate(date);
    const user_id = useParams().id;

    useEffect(() => {
        const loadPreview = async () => {
            try {
                const image = (await getImageByCode(post.id, folderName));
                if (!image || !image.blob) {
                    loadPreviewOnServer();
                } else {
                    setPreview(URL.createObjectURL(image.blob));
                }
            } catch (error) {
                setPreview(null);
            }
        }

        const loadPreviewOnServer = async () => {
            const blob = await loadImage(folderName);
            const image: ImageType = {
                code: folderName,
                blob,
            }
            savePostImage(post.id, image);
            setPreview(URL.createObjectURL(blob));
        }

        loadPreview();
    }, [])

    return (
        <div className={styles.container}>
            <Link
                className={styles.link}
                to={`/user/${user_id}/post/${post.id}`}
                state={post.id}
            >
                <img
                    className={styles.image}
                    alt="preview"
                    src={preview}
                />
                <span className={styles.post_name}>
                    {post.title}
                    <div className={styles.intro}>
                        <span>{post.models[0].value}</span>
                        <span>{postingDate}</span>
                    </div>
                </span>
            </Link>
            <div className={styles.delete}>
                <Menu foldername={folderName}></Menu>
            </div>
        </div>
    )
}