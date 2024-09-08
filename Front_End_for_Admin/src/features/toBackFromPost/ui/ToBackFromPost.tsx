import { AppDispath } from "@/app/model/store/Store";
import { selectSnapshot } from "@/entities/showcasePosts/model/slice/snapshot/selectors"
import { servicesActions } from "@/entities/user";
import { updatePost } from "@/entities/user/model/slice/services/thunks/update/updatePost";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

export const ToBackFromPost = ({ children }) => {
    const snapshot = useSelector(selectSnapshot).snapshot;
    const dispatch = useDispatch<AppDispath>();
    
    useEffect(() => {
        console.log(snapshot)
        if (snapshot) {
            console.log('wtf')
            dispatch(updatePost(snapshot))
        }
    }, [])

    return (
        <div>
            {children}
        </div>
    )
}