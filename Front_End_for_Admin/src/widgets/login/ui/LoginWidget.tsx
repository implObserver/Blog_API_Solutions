import { useSelector } from "react-redux";
import { selectAuth } from "@/entities/user";
import { SubmitOfLogin } from "@/features/submitOfLogin";

export const LoginWidget = () => {
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
                <SubmitOfLogin></SubmitOfLogin>
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