import { AppDispath } from "@/app/model/store/Store";
import { HidePostForm } from "@/entities/hidePostForm";
import { addPost } from "@/entities/postState/model/slice/posts/thunks/post/addPost";
import { PostFormContext } from "@/shared/ui/postForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const CreatePost = () => {
    const dispath = useDispatch<AppDispath>();

    const [data, setData] = useState({
        title: '',
    })

    const formContext: PostFormContextType = {
        data,
        setData,
    }

    const submitHandle = (e) => {
        e.preventDefault();
        dispath(addPost(data));
    }

    return (
        <div onSubmit={submitHandle}>
            <PostFormContext.Provider value={formContext}>
                <HidePostForm></HidePostForm>
            </PostFormContext.Provider>
        </div>
    )
}