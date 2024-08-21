import { removeToken, removeUser } from "@/entities/user";

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