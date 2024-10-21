import { Signup } from "@/entities/signup";
import { signup } from "@/entities/user";
import { useAppDispatch } from "@/shared/lib";
import { SignupFormContext } from "@/shared/ui/signupForm";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const SubmitOfSignup = () => {
    const dispatch = useAppDispatch();

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
        dispatch(signup(data));
    }

    return (
        <div onSubmit={submitHandle}>
            <SignupFormContext.Provider value={formContext}>
                <Signup></Signup>
            </SignupFormContext.Provider>
        </div>
    )
}