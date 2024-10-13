import { AppDispath } from "@/app/model/store/Store"
import { tagActions } from "@/entities/tag";
import { useDispatch } from "react-redux"
import { usePostFilterContext } from "../lib/context/Context";
import { useLocation } from "react-router-dom";

export const PostsFilter = () => {
    const context = usePostFilterContext();
    const { pathname } = useLocation();
    const dispatch = useDispatch<AppDispath>();

    const clickHandle = (e: React.MouseEvent<HTMLDivElement>) => {

        dispatch(tagActions.setTag(context.tag));
        const element = e.target as HTMLElement;
        console.log(element.className)
        if (pathname.includes('post')) {
            window.location.href = "http://localhost:5001/";
        }
    }

    return (
        <div onClick={clickHandle}>
            {context.children}
        </div>
    )
}