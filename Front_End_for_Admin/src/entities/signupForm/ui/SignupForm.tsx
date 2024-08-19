import { UserForm, UserFormContext } from "@/shared/ui/userForm"
import styles from './styles/SignupForm.module.css'
import { useState } from "react";
import { loadToken } from "../api/localStorage/loadToken";
import { useDispatch } from "react-redux";
import { AppDispath } from "@/app/model/store/Store";
import { signup } from "@/app/model/slice/thunks/signup";

export const SignupForm = () => {
    const dispath = useDispatch<AppDispath>();

    const defaultData = {
        username: '',
        password: '',
    }

    const [data, setData] = useState(defaultData)

    const formContext: UserFormContextType = {
        data,
        setData,
        type: 'Sign Up'
    }

    const submitHandle = (e) => {
        e.preventDefault();
        dispath(signup(data));
    }

    return (
        <div onSubmit={submitHandle}>
            <span className={styles.name}>Sign Up</span>
            <UserFormContext.Provider value={formContext}>
                <UserForm></UserForm>
            </UserFormContext.Provider>
        </div>
    )
}