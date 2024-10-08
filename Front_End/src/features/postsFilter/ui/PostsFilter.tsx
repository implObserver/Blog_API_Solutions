import { AppDispath } from "@/app/model/store/Store"
import { tagActions } from "@/entities/tag";
import { useDispatch } from "react-redux"
import { usePostFilterContext } from "../lib/context/Context";

export const PostsFilter = () => {
    const context = usePostFilterContext();

    const dispatch = useDispatch<AppDispath>();

    const clickHandle = () => {
        dispatch(tagActions.setTag(context.tag));
    }

    return (
        <div onClick={clickHandle}>
            {context.children}
        </div>
    )
}