import { useSelector } from "react-redux";
import { selectUserServices } from "@/entities/user";
import { SubmitOfSignup } from "@/features/submitOfSignup";
import { SpinnerLoader } from "@/shared/ui/spinnerLoader";

export const SignupWidget = () => {
    const userServices = useSelector(selectUserServices);

    if (userServices.isPending) {
        return (
            <>
                <SpinnerLoader></SpinnerLoader>
            </>
        )
    }
    if (!userServices.isAuth) {
        return (
            <div>
                <SubmitOfSignup></SubmitOfSignup>
            </div>
        )
    }
    if (userServices.isAuth) {
        window.location.href = "http://localhost:5000/";
    }
}