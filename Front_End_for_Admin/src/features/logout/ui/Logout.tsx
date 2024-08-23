import { AppDispath } from "@/app/model/store/Store";
import { logout, removeToken, removeUser } from "@/entities/user";
import { useDispatch } from "react-redux";

export const Logout = ({ children }) => {
    const dispath = useDispatch<AppDispath>();

    const clickHandle = () => {
        removeToken();
        removeUser();
        dispath(logout());
    }

    return (
        <div onClick={clickHandle}>
            {children}
        </div>
    )
}