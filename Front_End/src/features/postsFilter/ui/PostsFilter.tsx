import { AppDispath } from "@/app/model/store/Store"
import { tagActions } from "@/entities/tag";
import { useDispatch } from "react-redux"
import { usePostFilterContext } from "../lib/context/Context";
import { useLocation } from "react-router-dom";
const homeUrl = import.meta.env.VITE_BLOG_URL;

export const PostsFilter = () => {
    const context = usePostFilterContext();
    const { pathname } = useLocation();
    const dispatch = useDispatch<AppDispath>();

    const clickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
        dispatch(tagActions.setTag(context.tag));

        if (pathname !== '/') {
            window.location.href = homeUrl;
        }
    }

    return (
        <div onClick={clickHandle}>
            {context.children}
        </div>
    )
}