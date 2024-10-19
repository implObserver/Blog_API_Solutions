import styles from './styles/DisplayImage.module.css'
import { useImageContext } from "../../../lib/context/Context";

export const DisplayImage = () => {
    const context = useImageContext();

    const selectedImage = context.file;

    return (
        <div className={styles.container}>
            {selectedImage && (
                <div>
                    <img
                        className={styles.img}
                        alt="preview"
                        src={URL.createObjectURL(selectedImage)}
                    />
                    <br /> <br />
                    <button className={styles.button}>
                        Remove
                    </button>
                </div>
            )}
        </div>
    );
};