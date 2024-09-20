import { useSelector } from "react-redux";
import { selectUserServices } from "@/entities/user";
import { SubmitOfLogin } from "@/features/submitOfLogin";
import { SpinnerLoader } from "@/shared/ui/spinnerLoader";

export const LoginWidget = () => {
    //localStorage.clear()
    const services = useSelector(selectUserServices);
    console.log(services.error)
    if (services.isPending) {
        return (
            <>
                <SpinnerLoader></SpinnerLoader>
            </>
        )
    }

    if (!services.isAuth) {
        return (
            <div>
                <SubmitOfLogin></SubmitOfLogin>
            </div>
        )
    }

    if (services.isAuth) {
        window.location.href = "http://localhost:5000/";
    }
}