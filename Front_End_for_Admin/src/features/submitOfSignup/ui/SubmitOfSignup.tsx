import { AppDispath } from "@/app/model/store/Store";
import { Signup } from "@/entities/signup";
import { signup } from "@/entities/user";
import { SignupFormContext } from "@/shared/ui/signupForm";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const SubmitOfSignup = () => {
    const dispath = useDispatch<AppDispath>();

    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
    })

    const formContext: SignupContext = {
        formData: data,
        setFormData: setData,
        formType: 'Sign Up',
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