import { AppDispath } from "@/app/model/store/Store";
import { LoginForm } from "@/entities/loginForm";
import { login } from "@/entities/user";
import { UserFormContext } from "@/shared/ui/userForm";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const SubmitOfLogin = () => {
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
            <UserFormContext.Provider value={formContext}>
                <LoginForm></LoginForm>
            </UserFormContext.Provider>
        </div>
    )
}