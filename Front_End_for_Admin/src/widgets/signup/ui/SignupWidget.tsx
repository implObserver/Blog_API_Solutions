import { useDispatch, useSelector } from "react-redux";
import { selectUserServices, servicesActions } from "@/entities/user";
import { SubmitOfSignup } from "@/features/submitOfSignup";
import { SpinnerLoader } from "@/shared/ui/spinnerLoader";
import { useEffect } from "react";
import { AppDispath } from "@/app/model/store/Store";
import { NotificationDestributor } from "@/features/notificationDestributor/ui/NotificationDestributor";

const blogUrl = import.meta.env.VITE_BLOG_URL;

export const SignupWidget = () => {
    const services = useSelector(selectUserServices);
    const dispatch = useDispatch<AppDispath>();

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
                <SubmitOfSignup></SubmitOfSignup>
                <NotificationDestributor />
            </div>
        )
    }
    if (services.isAuthenticated) {
        window.location.href = blogUrl;
    }
}