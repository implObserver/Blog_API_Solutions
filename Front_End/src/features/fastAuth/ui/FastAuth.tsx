import { fastLogin, selectUserServices } from "@/entities/user"
import { useAppDispatch } from "@/shared/lib";
import { useEffect } from "react";
import { useSelector } from "react-redux"

export const FastAuth = () => {
    const services = useSelector(selectUserServices);
    const isAuth = services.isAuthenticated;
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isAuth) {
            const makeAttempt = async () => {
                await dispatch(fastLogin());
            };
            makeAttempt();
        }
    }, [isAuth]);

    return null;
};