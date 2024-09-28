import { Denied } from "@/entities/denied";
import { Error } from "@/entities/error";
import { selectUserServices } from "@/entities/user";
import { useSelector } from "react-redux";
import { isAccess, isDenied, isError } from "../lib/helper/getStatuses";
import { Access } from "@/entities/access";

export const NotificationDestributor = () => {
    const services = useSelector(selectUserServices);

    if (!services.error) {
        return (
            <>
            </>
        )
    }

    const status = parseInt(services.error.name);
    if (isError(status)) {
        return (
            <div>
                <Error message={services.error.message} />
            </div>
        )
    }
    if (isDenied(status)) {
        return (
            <div>
                <Denied message={services.error.message} />
            </div>
        )
    }
    if (isAccess(status)) {
        return (
            <div>
                <Access message={services.error.message} />
            </div>
        )
    }
}