import { useState } from "react";
import styles from './styles/UploadImage.module.css'
import { useImageContext } from "../../../lib/context/Context";
export const UploadImage = () => {
    // Define a state variable to store the selected image
    const context = useImageContext();

    return (
        <div className={styles.container}>
            <input
                id={'file_upload'}
                className={styles.input}
                type="file"
                name="myImage"
                // Event handler to capture file selection and update the state
                onChange={(event) => {
                    console.log(event.target.files[0]); // Log the selected file
                    context.setImgFile(event.target.files[0]); // Update the state with the selected file
                }}
            />

            <label
                className={styles.custom_file_upload}
                htmlFor="file_upload"
            >
                Upload post preview
            </label>
        </div>
    )
}