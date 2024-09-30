import { AppDispath } from "@/app/model/store/Store";
import { SignupForm } from "@/entities/signupForm";
import { signup } from "@/entities/user";
import { UserFormContext } from "@/shared/ui/userForm";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const SubmitOfSignup = () => {
    const dispath = useDispatch<AppDispath>();

    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const formContext: UserFormContextType = {
        data,
        setData,
        type: 'Sign Up',
    }

    const submitHandle = (e) => {
        e.preventDefault();
        dispath(signup(data));
    }

    return (
        <div onSubmit={submitHandle}>
            <UserFormContext.Provider value={formContext}>
                <SignupForm></SignupForm>
            </UserFormContext.Provider>
        </div>
    )
}