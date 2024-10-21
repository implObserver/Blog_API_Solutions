import styles from './styles/UploadFile.module.css'
import { updateAvatar } from "@/entities/user/lib/helper/updateAvatar";
import { servicesActions } from "@/entities/user";
import { useAppDispatch } from '@/shared/lib';

export const UpdateAvatar = ({ children }) => {
    const dispatch = useAppDispatch();

    const changeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (files.length) {
            const avatar = files[0];
            await updateAvatar(avatar);
            dispatch(servicesActions.update());
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