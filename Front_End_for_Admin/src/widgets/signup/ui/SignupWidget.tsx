import { useSelector } from "react-redux";
import { selectAuth } from "@/entities/user";
import { SubmitOfSignup } from "@/features/submitOfSignup";

export const SignupWidget = () => {
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
                <SubmitOfSignup></SubmitOfSignup>
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