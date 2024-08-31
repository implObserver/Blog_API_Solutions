import { useDispatch, useSelector } from "react-redux";
import { useUploadContext } from "../lib/context/Context.";
import styles from './styles/UploadFile.module.css'
import { AppDispath } from "@/app/model/store/Store";
import { selectUserServices, updateProfile } from "@/entities/user";
import { updateAvatar } from "@/entities/user/model/slice/services/thunks/update/updateAvatar";
import { getAvatar } from "@/entities/user/model/slice/services/thunks/get/getAvatar";
import { useState } from "react";

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