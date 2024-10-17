import { AppDispath } from "@/app/model/store/Store";
import { TogglePostForm } from "@/entities/togglePostForm";
import { addPost } from "@/entities/postState/model/slice/posts/thunks/post/addPost";
import { PostFormContext } from "@/shared/ui/postForm";
import { useState } from "react";
import { useDispatch } from "react-redux";

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
                <TogglePostForm></TogglePostForm>
            </PostFormContext.Provider>
        </div>
    )
}