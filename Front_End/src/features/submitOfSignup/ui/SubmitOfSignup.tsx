import { Signup } from "@/entities/signup";
import { signup } from "@/entities/user";
import { useAppDispatch } from "@/shared/lib";
import { SignupFormContext } from "@/shared/ui/signupForm";
import { useState } from "react";

export const SubmitOfSignup = () => {
    const dispath = useAppDispatch();

    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
    })

    const formContext: SignupFormContextType = {
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
            <SignupFormContext.Provider value={formContext}>
                <Signup></Signup>
            </SignupFormContext.Provider>
        </div>
    )
}