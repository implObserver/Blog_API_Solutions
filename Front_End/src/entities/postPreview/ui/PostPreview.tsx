import { useEffect, useState } from "react";
import { Preview } from "../components/preview"
import { Title } from "../components/title"
import { usePostPreviewContext } from "../lib/context/Context";
import { getImageByCode } from "../lib/helper/getPostImageFromIDB";
import { loadImage } from "../lib/helper/loadImage";
import styles from './styles/PostPreview.module.css'

export const PostPreview = () => {
    return (
        <div className={styles.container}>
            <Preview></Preview>
            <Title></Title>
        </div>
    )
}