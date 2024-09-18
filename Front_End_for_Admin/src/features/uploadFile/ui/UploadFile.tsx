import { useDispatch } from "react-redux";
import styles from './styles/UploadFile.module.css'
import { AppDispath } from "@/app/model/store/Store";
import { updateAvatar } from "@/entities/user/model/slice/services/thunks/update/updateAvatar";
import { getAvatar } from "@/entities/user/model/slice/services/thunks/get/getAvatar";

export const UploadFile = ({ children }) => {
    const dispatch = useDispatch<AppDispath>();

    const changeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (files.length) {
            const avatar = files[0];
            await dispatch(updateAvatar(avatar));
            dispatch(getAvatar());
        }

    }

    return (
        <div>
            <input
                id={"idd"}
                type="file"
                accept="image/*"
                name="myImage"
                className={styles.input}
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