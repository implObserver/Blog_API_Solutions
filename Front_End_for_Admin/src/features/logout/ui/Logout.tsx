import { removeToken } from "@/entities/user/api/localstorage/token/removeToken"
import { removeUser } from "@/entities/user/api/localstorage/user/removeUser";

export const Logout = ({ children }) => {
    const clickHandle = () => {
        removeToken();
        removeUser();
    }
    return (
        <div onClick={clickHandle}>
            {children}
        </div>
    )
}