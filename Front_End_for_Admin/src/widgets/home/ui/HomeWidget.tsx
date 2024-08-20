import { loadUser } from "@/entities/user";
import { Logout } from "@/features/logout";

export const HomeWidget = () => {
    const user: User = loadUser();
    return (
        <div>
            Welcome {user.name}!!!
            <Logout>
                <button>Logout</button>
            </Logout>
        </div>
    )
}