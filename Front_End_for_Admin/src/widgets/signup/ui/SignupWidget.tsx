import { useSelector } from "react-redux";
import { selectAuth } from "@/entities/user";
import { SubmitOfSignup } from "@/features/submitOfSignup";
import { SpinnerLoader } from "@/shared/ui/spinnerLoader";

export const SignupWidget = () => {
    const select = useSelector(selectAuth).states;

    if (select.isAuthInProgress) {
        return (
            <>
                <SpinnerLoader></SpinnerLoader>
            </>
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
        window.location.href = "http://localhost:5000/";
    }
}