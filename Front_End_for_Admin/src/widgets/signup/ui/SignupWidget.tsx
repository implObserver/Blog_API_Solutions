import { useDispatch, useSelector } from "react-redux";
import { selectUserServices, servicesActions } from "@/entities/user";
import { SubmitOfSignup } from "@/features/submitOfSignup";
import { SpinnerLoader } from "@/shared/ui/spinnerLoader";
import { useEffect } from "react";
import { AppDispath } from "@/app/model/store/Store";

export const SignupWidget = () => {
    const userServices = useSelector(selectUserServices);
    const services = useSelector(selectUserServices);
    const dispatch = useDispatch<AppDispath>();
    useEffect(() => {
        dispatch(servicesActions.clearErrors());
    }, [])
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
                <span>{userServices.error ? userServices.error : ''}</span>
            </div>
        )
    }
    if (userServices.isAuth) {
        window.location.href = "http://localhost:5000/";
    }
}