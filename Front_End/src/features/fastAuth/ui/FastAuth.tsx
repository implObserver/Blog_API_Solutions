import { fastLogin, logout, selectUserServices } from "@/entities/user"
import { useAppDispatch } from "@/shared/lib";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

export const FastAuth = () => {
    const services = useSelector(selectUserServices);
    const isAuth = services.isAuthenticated;
    const [attempt, setAttempt] = useState(0);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setTimeout(() => {
            if (!isAuth && attempt < 2) {
                const makeAttempt = async () => {
                    await dispatch(fastLogin());
                    setAttempt((prev) => prev + 1);
                };
                makeAttempt();
            }
            if (!isAuth && attempt >= 2 && !services.isLoading) {
                dispatch(logout());
            }
        }, 3000);
    }, [isAuth, attempt]);

    return null;
};