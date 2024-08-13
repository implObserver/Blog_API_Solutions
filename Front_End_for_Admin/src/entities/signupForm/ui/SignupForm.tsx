import { UserForm, UserFormContext } from "@/shared/ui/userForm"
import styles from './styles/SignupForm.module.css'
import { postUser } from "../api/postUser";
import { useState } from "react";

export const SignupForm = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
    })
    
    const formContext: UserFormContextType = {
        data,
        setData,
    }

    const submitHandle = () => {
        const reponse = postUser(data);
        console.log(reponse)
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