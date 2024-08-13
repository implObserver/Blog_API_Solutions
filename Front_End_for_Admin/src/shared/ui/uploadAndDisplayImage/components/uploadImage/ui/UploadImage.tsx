import { useState } from "react";
import styles from './styles/UploadImage.module.css'
import { useImageContext } from "../../../lib/context/Context";
export const UploadImage = () => {
    // Define a state variable to store the selected image
    const context = useImageContext();

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        context.setImgFile(e.target.files[0]);
    }

    const id = `file_upload ${Math.random()}`;
    return (
        <div className={styles.container}>
            <input
                id={id}
                className={styles.input}
                type="file"
                accept="image/*"
                name="myImage"
                // Event handler to capture file selection and update the state
                onChange={changeHandler}
            />

            <label
                className={styles.custom_file_upload}
                htmlFor={`${id}`}
            >
                Upload post preview
            </label>
        </div >
    )
}