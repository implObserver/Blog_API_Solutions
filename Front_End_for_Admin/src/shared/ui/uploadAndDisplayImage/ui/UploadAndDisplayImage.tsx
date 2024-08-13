import { useState } from "react"
import { DisplayImage } from "../components/displayImage"
import { UploadImage } from "../components/uploadImage"
import styles from './styles/UploadAndDisplayImage.module.css'
import { useImageContext } from "../lib/context/Context"

export const UploadAndDisplayImage = () => {
    const context = useImageContext();
    const file = context.file;
    console.log(file)
    if (file) {
        return (
            <div className={styles.container}>
                <DisplayImage></DisplayImage>
            </div>
        )
    } else {
        return (
            <div className={styles.container}>
                <UploadImage></UploadImage>
            </div>
        )
    }
}