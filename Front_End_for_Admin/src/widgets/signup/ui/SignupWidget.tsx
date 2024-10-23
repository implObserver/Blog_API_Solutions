import { useSelector } from "react-redux";
import { getUserServicesResponseIds, selectUserServices, servicesActions } from "@/entities/user";
import { SubmitOfSignup } from "@/features/submitOfSignup";
import { SpinnerLoader } from "@/shared/ui/spinnerLoader";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "@/shared/lib";
import { NotificationDistributor } from "@/features/notificationDistributor";

const blogUrl = import.meta.env.VITE_BLOG_URL;

export const SignupWidget = () => {
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
                <SubmitOfSignup></SubmitOfSignup>
                <NotificationDistributor ids={ids} />
            </div>
        )
    }
    if (services.isAuthenticated) {
        window.location.href = blogUrl;
    }
}