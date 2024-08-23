import { useSelector } from "react-redux";
import { selectAuth } from "@/entities/user";
import { SubmitOfLogin } from "@/features/submitOfLogin";
import { SpinnerLoader } from "@/shared/ui/spinnerLoader";

export const LoginWidget = () => {
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
                <SubmitOfLogin></SubmitOfLogin>
            </div>
        )
    }

    if (select.isAuth) {
        window.location.href = "http://localhost:5000/";
    }
}