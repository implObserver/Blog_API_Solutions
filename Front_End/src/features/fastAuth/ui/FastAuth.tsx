import { AppDispath } from "@/app/model/store/Store";
import { selectUserServices } from "@/entities/user"
import { fastLogin } from "@/entities/user/model/slice/services/thunks/auth/fastLogin";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"

export const FastAuth = () => {
    const isAuth = useSelector(selectUserServices).isAuth;
    const [attempt, setAttempt] = useState(false);
    console.log(isAuth)
    const dispatch = useDispatch<AppDispath>();
    if (!isAuth && !attempt) {
        console.log('aa')
        dispatch(fastLogin());
        setAttempt(true);
    }
    return (
        <div>

        </div>
    )
}