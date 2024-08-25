import { selectUserServices } from "@/entities/user"
import { UpdateOfProfile } from "@/features/updateOfProfile"
import { useSelector } from "react-redux"

export const DataOfProfile = () => {
    const user = useSelector(selectUserServices).user;

    return (
        <div>
            <span>{user.name}</span>
            <UpdateOfProfile></UpdateOfProfile>
        </div>
    )
}