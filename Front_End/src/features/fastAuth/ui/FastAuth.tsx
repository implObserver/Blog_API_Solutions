import { fastLogin, selectUserServices } from "@/entities/user"
import { useAppDispatch } from "@/shared/lib";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

export const FastAuth = () => {
    const services = useSelector(selectUserServices);
    const isAuth = services.isAuthenticated;
    const [attempt, setAttempt] = useState(0);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isAuth && attempt < 2) {
            const makeAttempt = async () => {
                await dispatch(fastLogin());
                setAttempt((prev) => prev + 1);
            };
            makeAttempt();
        }
    }, [isAuth, attempt, dispatch]);

    if (!isAuth && attempt >= 2 && !services.isLoading) {
        return <div>не авторизован</div>;
    }

    return null;
};