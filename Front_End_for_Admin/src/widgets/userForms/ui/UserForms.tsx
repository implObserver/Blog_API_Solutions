import { useEffect, useState } from "react";
import { getForm } from "../api/loadForm"
import { SignupForm } from "@/entities/signupForm";
import { LoginForm } from "@/entities/loginForm";

export const UserForms = () => {
    return (
        <div>
            
            <LoginForm></LoginForm>
        </div>
    )
}