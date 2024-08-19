import { UserForm, UserFormContext } from "@/shared/ui/userForm"
import styles from './styles/LoginForm.module.css'
import { loginUser } from "../api/loginUser";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispath } from "@/app/model/store/Store";
import { signup } from "@/app/model/slice/thunks/signup";
import { login } from "@/app/model/slice/thunks/login";

export const LoginForm = () => {
    const dispath = useDispatch<AppDispath>();

    const [data, setData] = useState({
        username: '',
        password: '',
    })

    const formContext: UserFormContextType = {
        data,
        setData,
        type: 'Log In',
    }

    const submitHandle = (e) => {
        e.preventDefault();
        dispath(login(data));
    }

    return (
        <div onSubmit={submitHandle}>
            <span className={styles.name}>Log In</span>
            <UserFormContext.Provider value={formContext}>
                <UserForm></UserForm>
            </UserFormContext.Provider>
        </div>
    )
}