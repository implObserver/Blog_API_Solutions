import { DisplayImage } from "../components/displayImage"
import styles from './styles/UploadAndDisplayImage.module.css'
import { useImageContext } from "../lib/context/Context"
import { useMemo } from "react"

export const UploadAndDisplayImage = () => {
    const context = useImageContext();

    const file = useMemo(() => context.file, [context.file]);

    if (file) {
        return (
            <div className={styles.container}>
                <DisplayImage />
            </div>
        );
    } else {
        return (
            <div className={styles.container} >

            </div>
        );
    }
}