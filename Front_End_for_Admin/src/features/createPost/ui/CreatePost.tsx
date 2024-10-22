import { TogglePostForm } from "@/entities/togglePostForm";
import { PostFormContext } from "@/shared/ui/postForm";
import { useState } from "react";
import { useAppDispatch } from "@/shared/lib";
import { addPost } from "@/entities/postState";

export const CreatePost = () => {
    const dispatch = useAppDispatch();

    const [data, setData] = useState({
        title: '',
    })

    const formContext: PostFormContext = {
        data,
        setData,
    }

    const submitHandle = (e) => {
        e.preventDefault();
        dispatch(addPost(data));
    }

    return (
        <div onSubmit={submitHandle}>
            <PostFormContext.Provider value={formContext}>
                <TogglePostForm></TogglePostForm>
            </PostFormContext.Provider>
        </div>
    )
}