import { Denied } from "@/entities/denied";
import { Error } from "@/entities/error";
import { selectUserServices } from "@/entities/user";
import { useSelector } from "react-redux";
import { isAccess, isDenied, isError } from "../lib/helper/getStatuses";
import { Access } from "@/entities/access";

export const NotificationDistributor = () => {
    const services = useSelector(selectUserServices);
    const { error } = services;

    if (!error) return null;

    const status = parseInt(error.name);
    const message = error.message;

    const NotificationComponent = isError(status)
        ? Error
        : isDenied(status)
            ? Denied
            : isAccess(status)
                ? Access
                : null;

    return NotificationComponent ? (
        <div>
            <NotificationComponent message={message} />
        </div>

    ) : null;
};