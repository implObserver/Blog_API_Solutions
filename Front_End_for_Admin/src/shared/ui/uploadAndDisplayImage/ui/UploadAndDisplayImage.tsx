import { DisplayImage } from "../components/displayImage"
import { UploadImage } from "../components/uploadImage"
import styles from './styles/UploadAndDisplayImage.module.css'
import { useImageContext } from "../lib/context/Context"
import { useMemo } from "react"

export const UploadAndDisplayImage = () => {
    const context = useImageContext();

    // Мемоизация переменной file
    const file = useMemo(() => context.file, [context.file]);
    console.log(file)
    if (file) {
        return (
            <div className={styles.container}>
                <DisplayImage />
            </div>
        );
    } else {
        return (
            <div className={styles.container}>
                <UploadImage />
            </div>
        );
    }
}