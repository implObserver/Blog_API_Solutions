import { Login } from "@/entities/login";
import { login } from "@/entities/user";
import { useAppDispatch } from "@/shared/lib";
import { LoginFormContext } from "@/shared/ui/loginForm";
import { useState } from "react";

export const SubmitOfLogin = () => {
    const dispatch = useAppDispatch();

    const [data, setData] = useState({
        identifier: '',
        password: '',
    })

    const formContext: LoginContext = {
        formData: data,
        setFormData: setData,
        formType: 'Log In',
    }

    const submitHandle = (e) => {
        e.preventDefault();
        dispatch(login(data));
    }

    return (
        <div onSubmit={submitHandle}>
            <LoginFormContext.Provider value={formContext}>
                <Login></Login>
            </LoginFormContext.Provider>
        </div>
    )
}