import { useDispatch, useSelector } from "react-redux";
import { useUploadContext } from "../lib/context/Context.";
import styles from './styles/UploadFile.module.css'
import { AppDispath } from "@/app/model/store/Store";
import { selectUserServices, updateProfile } from "@/entities/user";
import { updateAvatar } from "@/entities/user/model/slice/services/thunks/update/updateAvatar";

export const UploadFile = ({ children }) => {
    const context = useUploadContext();
    const dispath = useDispatch<AppDispath>();
    const user = useSelector(selectUserServices).user;

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const avatar = e.target.files[0];
        context.setImgFile(avatar);
        const updateData: UpdateData = {
            user,
            avatar,
        }
        dispath(updateAvatar(updateData));
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