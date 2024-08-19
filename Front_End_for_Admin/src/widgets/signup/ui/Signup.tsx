import { SignupForm } from "@/entities/signupForm";
import { useSelector } from "react-redux";
import { selectAuth } from "@/app/model/slice/selectors";

export const Signup = () => {
    const select = useSelector(selectAuth);
    if (select.isAuthInProgress) {
        return (
            <div>
                Sending!
            </div>
        )
    }
    if (!select.isAuth) {
        return (
            <div>
                <SignupForm></SignupForm>
            </div>
        )
    }
    if (select.isAuth) {
        return (
            <div>
                Auth!
            </div>
        )
    }
}