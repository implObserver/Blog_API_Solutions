import { useSelector } from "react-redux";
import { getUserServicesResponseIds, selectUserServices, servicesActions } from "@/entities/user";
import { SubmitOfLogin } from "@/features/submitOfLogin";
import { SpinnerLoader } from "@/shared/ui/spinnerLoader";
import { useEffect, useMemo } from "react";
import { NotificationDistributor } from "@/features/notificationDistributor/ui/NotificationDistributor";
import { useAppDispatch } from "@/shared/lib";

const blogUrl = import.meta.env.VITE_BLOG_URL;

export const LoginWidget = () => {
    const services = useSelector(selectUserServices);
    const dispatch = useAppDispatch();
    const ids = useMemo(() => getUserServicesResponseIds(), []);

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
                <NotificationDistributor ids={ids} />
            </div>
        )
    }

    if (services.isAuthenticated) {
        window.location.href = blogUrl;
    }
}