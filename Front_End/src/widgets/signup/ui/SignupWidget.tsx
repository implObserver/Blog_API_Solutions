import { useDispatch, useSelector } from "react-redux";
import { selectUserServices, servicesActions } from "@/entities/user";
import { SubmitOfSignup } from "@/features/submitOfSignup";
import { SpinnerLoader } from "@/shared/ui/spinnerLoader";
import { useEffect } from "react";
import { AppDispath } from "@/app/model/store/Store";
import { NotificationDestributor } from "@/features/notificationDestributor/ui/NotificationDestributor";

const homeUrl = import.meta.env.VITE_BLOG_URL;

export const SignupWidget = () => {
    const services = useSelector(selectUserServices);
    const dispatch = useDispatch<AppDispath>();

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
                <SubmitOfSignup></SubmitOfSignup>
                <NotificationDestributor />
            </div>
        )
    }
    if (services.isAuth) {
        window.location.href = homeUrl;
    }
}