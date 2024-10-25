import { Login } from "@/entities/login";
import { login } from "@/entities/user";
import { useAppDispatch } from "@/shared/lib";
import { LoginFormContext } from "@/shared/ui/loginForm";
import { useState } from "react";

export const SubmitOfLogin = () => {
    const dispath = useAppDispatch();

    const [data, setData] = useState({
        identifier: '',
        password: '',
    })

    const formContext: LoginFormContextType = {
        data,
        setData,
        type: 'Log In',
    }

    const submitHandle = async (e) => {
        e.preventDefault();
        await dispath(login(data));
    }

    return (
        <div onSubmit={submitHandle}>
            <LoginFormContext.Provider value={formContext}>
                <Login></Login>
            </LoginFormContext.Provider>
        </div>
    )
}