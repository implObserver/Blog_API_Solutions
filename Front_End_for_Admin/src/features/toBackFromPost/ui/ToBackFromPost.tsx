import { AppDispath } from "@/app/model/store/Store";
import { selectSnapshot } from "@/entities/postPreview";
import { updatePost } from "@/entities/user";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

export const ToBackFromPost = ({ children }) => {
    const snapshot = useSelector(selectSnapshot).snapshot;
    const dispatch = useDispatch<AppDispath>();

    useEffect(() => {
        if (snapshot) {
            dispatch(updatePost(snapshot))
        }
    }, [])

    return (
        <div>
            {children}
        </div>
    )
}