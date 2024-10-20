import { AppDispath } from "@/app/model/store/Store";
import { selectUserServices } from "@/entities/user"
import { fastLogin } from "@/entities/user/model/slice/services/thunks/auth/fastLogin";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

export const FastAuth = () => {
    const services = useSelector(selectUserServices);
    const isAuth = services.isAuth;
    const [attempt, setAttempt] = useState(0);
    const dispatch = useDispatch<AppDispath>();

    useEffect(() => {
        if (!isAuth && attempt < 2) {
            const makeAttempt = async () => {
                await dispatch(fastLogin());
                setAttempt((prev) => prev + 1);
            };
            makeAttempt();
        }
    }, [isAuth, attempt, dispatch]);

    if (!isAuth && attempt >= 2 && !services.isPending) {
        return <div>не авторизован</div>;
    }

    return null;
};