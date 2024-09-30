import { useDispatch, useSelector } from "react-redux";
import { selectUserServices, servicesActions } from "@/entities/user";
import { SubmitOfLogin } from "@/features/submitOfLogin";
import { SpinnerLoader } from "@/shared/ui/spinnerLoader";
import { AppDispath } from "@/app/model/store/Store";
import { useEffect } from "react";
import { NotificationDestributor } from "@/features/notificationDestributor/ui/NotificationDestributor";


export const LoginWidget = () => {
    const services = useSelector(selectUserServices);
    const dispatch = useDispatch<AppDispath>();
    //localStorage.clear()
    useEffect(() => {
        dispatch(servicesActions.clearErrors());
    }, [])

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
                <NotificationDestributor />
            </div>
        )
    }

    if (services.isAuth) {
        window.location.href = "http://localhost:5001/";
    }
}