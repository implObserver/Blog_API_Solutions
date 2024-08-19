import { SignupForm } from "@/entities/signupForm";
import { useSelector } from "react-redux";
import { selectAuth } from "@/app/model/slice/selectors";
import { LoginForm } from "@/entities/loginForm";

export const Login = () => {
    const select = useSelector(selectAuth);
    if (select.isAuthInProgress) {
        return (
            <div>
                Sending...
            </div>
        )
    }
    if (!select.isAuth) {
        return (
            <div>
                <LoginForm></LoginForm>
            </div>
        )
    }
    if (select.isAuth) {
        return (
            <div>
                login!
            </div>
        )
    }
}