import { useEffect, useState } from "react";
import styles from './styles/PostPreviewStyles.module.css'
import { usePostPreviewContext } from "../lib/context/Context";
import { getImageByCode } from "../lib/helper/getPostImageFromIDB";
import { loadImage } from "../lib/helper/loadImage";
import { addPostImages } from "../lib/helper/loadImageToIDB";
import { Menu } from "../components/menu/ui/Menu";
import { getFormattedDate } from "@/shared/lib/helpers/getFormattedDate";
import { Link, useParams } from "react-router-dom";

export const PostPreview = ({ post }) => {
    const [preview, setPreview] = useState('');
    const folderName = post.elements[1].imageUrl;
    const date = new Date(post.postingDate);
    const postingDate = getFormattedDate(date);
    const user_id = useParams().id;
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
                        <span>{post.elements[0].value}</span>
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