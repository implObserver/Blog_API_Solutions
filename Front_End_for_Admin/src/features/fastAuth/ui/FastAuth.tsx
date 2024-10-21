import { logout, selectUserServices, servicesActions } from "@/entities/user"
import { fastLogin } from "@/entities/user/model/slice/services/thunks/auth/fastLogin";
import { useAppDispatch } from "@/shared/lib";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

const blogUrl = import.meta.env.VITE_BLOG_URL;

export const FastAuth = () => {
    const services = useSelector(selectUserServices);
    const isAuth = services.isAuthenticated;
    const [attempt, setAttempt] = useState(0);
    const dispatch = useAppDispatch();
    console.log('wtf')
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
        dispatch(logout());
    }

    return null;
};