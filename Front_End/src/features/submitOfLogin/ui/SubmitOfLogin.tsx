import { AppDispath } from "@/app/model/store/Store";
import { Login } from "@/entities/login";


import { login } from "@/entities/user";
import { LoginFormContext } from "@/shared/ui/loginForm";

import { useState } from "react";
import { useDispatch } from "react-redux";

export const SubmitOfLogin = () => {
    const dispath = useDispatch<AppDispath>();
    //localStorage.clear()
    const [data, setData] = useState({
        identifier: '',
        password: '',
    })

    const formContext: LoginFormContextType = {
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
            <LoginFormContext.Provider value={formContext}>
                <Login></Login>
            </LoginFormContext.Provider>
        </div>
    )
}