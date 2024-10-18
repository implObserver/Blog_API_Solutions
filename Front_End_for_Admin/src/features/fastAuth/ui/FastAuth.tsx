import { AppDispath } from "@/app/model/store/Store";
import { selectUserServices } from "@/entities/user"
import { fastLogin } from "@/entities/user/model/slice/services/thunks/auth/fastLogin";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"

const blogUrl = import.meta.env.VITE_BLOG_URL;

export const FastAuth = () => {
    const services = useSelector(selectUserServices);
    const isAuth = services.isAuth;

    const [attempt, setAttempt] = useState(0);
    const dispatch = useDispatch<AppDispath>();
    if (!isAuth && attempt > 2) {
        console.log('aa')
        dispatch(fastLogin());
        setAttempt(attempt + 1);
        return (
            <div>

            </div>
        )
    } else if (!isAuth && attempt >= 2) {
        if (!services.isPending) {
            <div>
                не авторизован
            </div>
        }
    }
}