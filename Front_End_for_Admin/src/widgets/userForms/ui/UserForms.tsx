import { useEffect, useState } from "react";
import { getForm } from "../api/loadForm"
import { SignupForm } from "@/entities/signupForm";

export const UserForms = () => {
    return (
        <div>
            <SignupForm></SignupForm>
        </div>
    )
}