import { useSelector } from "react-redux";
import { selectUserServices, servicesActions } from "@/entities/user";
import { SubmitOfLogin } from "@/features/submitOfLogin";
import { SpinnerLoader } from "@/shared/ui/spinnerLoader";
import { useEffect } from "react";
import { useAppDispatch } from "@/shared/lib";
import { NotificationDestributor } from "@/features/notificationDestributor";

const homeUrl = import.meta.env.VITE_BLOG_URL;

export const LoginWidget = () => {
    const services = useSelector(selectUserServices);
    const dispatch = useAppDispatch();

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
        window.location.href = homeUrl;
    }
}