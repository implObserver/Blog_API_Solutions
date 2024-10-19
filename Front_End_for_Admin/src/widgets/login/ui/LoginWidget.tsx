import { useDispatch, useSelector } from "react-redux";
import { selectUserServices, servicesActions } from "@/entities/user";
import { SubmitOfLogin } from "@/features/submitOfLogin";
import { SpinnerLoader } from "@/shared/ui/spinnerLoader";
import { AppDispath } from "@/app/model/store/Store";
import { useEffect } from "react";
import { NotificationDestributor } from "@/features/notificationDestributor/ui/NotificationDestributor";

const blogUrl = import.meta.env.VITE_BLOG_URL;

export const LoginWidget = () => {
    const services = useSelector(selectUserServices);
    const dispatch = useDispatch<AppDispath>();
    //localStorage.clear()
    useEffect(() => {
        dispatch(servicesActions.clearErrors());
    }, [])

    if (services.isLoading) {
        return (
            <>
                <SpinnerLoader></SpinnerLoader>
            </>
        )
    }

    if (!services.isAuthenticated) {
        return (
            <div>
                <SubmitOfLogin></SubmitOfLogin>
                <NotificationDestributor />
            </div>
        )
    }

    if (services.isAuthenticated) {
        window.location.href = blogUrl;
    }
}