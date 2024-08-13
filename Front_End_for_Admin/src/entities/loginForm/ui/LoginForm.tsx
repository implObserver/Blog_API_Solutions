import { UserForm, UserFormContext } from "@/shared/ui/userForm"
import styles from './styles/LoginForm.module.css'
import { loginUser } from "../api/loginUser";
import { useState } from "react";

export const LoginForm = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
    })

    const formContext: UserFormContextType = {
        data,
        setData,
        type: 'log_in',
    }

    const submitHandle = () => {
        console.log(loginUser(data));
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