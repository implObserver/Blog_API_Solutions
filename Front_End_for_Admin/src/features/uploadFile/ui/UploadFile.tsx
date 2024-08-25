import { useUploadContext } from "../lib/context/Context.";
import styles from './styles/UploadFile.module.css'

export const UploadFile = ({ children }) => {
    const context = useUploadContext();

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        context.setImgFile(e.target.files[0]);
    }

    return (
        <div>
            <input
                id={"idd"}
                type="file"
                accept="image/*"
                name="myImage"
                className={styles.input}
                // Event handler to capture file selection and update the state
                onChange={changeHandler}
            />

            <label
                className={styles.custom_file_upload}
                htmlFor={"idd"}
            >
                {children}
            </label>
        </div>
    )
}