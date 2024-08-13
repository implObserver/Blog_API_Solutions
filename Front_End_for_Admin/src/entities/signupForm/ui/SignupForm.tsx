import { UserForm, UserFormContext } from "@/shared/ui/userForm"
import styles from './styles/SignupForm.module.css'
import { authUser } from "../api/authUser";
import { useState } from "react";

export const SignupForm = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
    })

    const formContext: UserFormContextType = {
        data,
        setData,
        type: 'sign_up'
    }
    console.log({data})
    
    const submitHandle = () => {
        console.log('wtf')
        authUser(data);
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