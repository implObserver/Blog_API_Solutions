import { AppDispath } from "@/app/model/store/Store";
import { selectUserServices } from "@/entities/user"
import { fastLogin } from "@/entities/user/model/slice/services/thunks/auth/fastLogin";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"

export const FastAuth = () => {
    const services = useSelector(selectUserServices);
    const isAuth = services.isAuth;
    const isPending = services.isPending;

    const [attempt, setAttempt] = useState(false);
    const dispatch = useDispatch<AppDispath>();
    if (!isAuth && !attempt) {
        console.log('aa')
        dispatch(fastLogin());
        setAttempt(true);
        return (
            <div>

            </div>
        )
    } else if (!isAuth && attempt) {
        if (!services.isPending) {
            window.location.href = "http://localhost:5001/";
        }
    }
}