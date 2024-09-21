import { useDispatch, useSelector } from "react-redux";
import { selectUserServices, servicesActions } from "@/entities/user";
import { SubmitOfLogin } from "@/features/submitOfLogin";
import { SpinnerLoader } from "@/shared/ui/spinnerLoader";
import { AppDispath } from "@/app/model/store/Store";
import { useEffect } from "react";

export const LoginWidget = () => {
    //localStorage.clear()
    const services = useSelector(selectUserServices);
    const dispatch = useDispatch<AppDispath>();
    useEffect(() => {
        dispatch(servicesActions.clearErrors());
    }, [])
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
                <span>{services.error ? services.error : ''}</span>
            </div>
        )
    }

    if (services.isAuth) {
        window.location.href = "http://localhost:5000/";
    }
}