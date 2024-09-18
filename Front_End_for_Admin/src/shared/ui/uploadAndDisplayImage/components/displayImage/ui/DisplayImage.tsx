import styles from './styles/DisplayImage.module.css'
import { useImageContext } from "../../../lib/context/Context";
import { useMemo } from 'react';

export const DisplayImage = () => {
    const context = useImageContext();

    const selectedImage = useMemo(() => context.file, [context.file]);

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
                    <button className={styles.button} onClick={() => context.setImgFile(null)}>
                        Remove
                    </button>
                </div>
            )}
        </div>
    );
};