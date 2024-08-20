import { UserForm, UserFormContext } from "@/shared/ui/userForm"
import styles from './styles/SignupForm.module.css'
import { useState } from "react";
import { loadToken } from "../../user/api/localstorage/token/loadToken";
import { useDispatch } from "react-redux";
import { AppDispath } from "@/app/model/store/Store";
import { signup } from "@/entities/user/model/slice/auth/thunks/signup";

export const SignupForm = () => {
    return (
        <div>
            <span className={styles.name}>Sign Up</span>
            <UserForm></UserForm>
        </div>
    )
}