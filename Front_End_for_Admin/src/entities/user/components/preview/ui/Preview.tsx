import { selectUserServices } from "@/entities/user/model/slice/services/selectors"
import { Avatar } from "@/shared/ui/avatar"
import { AvatarContext } from "@/shared/ui/avatar/lib/context/Context";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export const Preview = () => {
    const user = useSelector(selectUserServices).user;
    const avatar = user.profile === undefined ? 'default' : user.profile.avatar;

    const avatarContext: AvatarContextType = {
        image: avatar,
    }

    return (
        <div>
            <AvatarContext.Provider value={avatarContext}>
                <Link to={`/profile/${user.id}`}>
                    <Avatar></Avatar>
                </Link>
            </AvatarContext.Provider>
        </div>
    )
}