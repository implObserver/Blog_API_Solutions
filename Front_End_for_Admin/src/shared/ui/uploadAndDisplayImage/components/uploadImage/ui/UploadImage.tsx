import styles from './styles/UploadImage.module.css'
import { useMemo } from 'react';

export const UploadImage = () => {
    const id = useMemo(() => `file_upload_${Math.random()}`, []);

    return (
        <div className={styles.container}>
            <input
                id={id}
                className={styles.input}
                type="file"
                accept="image/*"
                name="myImage"
            />

            <label
                className={styles.custom_file_upload}
                htmlFor={id}
            >
                Upload post preview
            </label>
        </div>
    );
}