import styles from './styles/DisplayImage.module.css'
import { useImageContext } from "../../../lib/context/Context";

export const DisplayImage = () => {
    const context = useImageContext();
    const selectedImage = context.file;
    return (
        <div className={styles.container}>
            {selectedImage && (
                <div>
                    {/* Display the selected image */}
                    <img className={styles.img}
                        alt="preview"
                        src={URL.createObjectURL(selectedImage)}
                    />
                    <br /> <br />
                    {/* Button to remove the selected image */}
                    <button className={styles.button} onClick={() => context.setImgFile(null)}>Remove</button>
                </div>
            )}
        </div>
    )
}