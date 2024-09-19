import { AppDispath } from "@/app/model/store/Store";
import { HidePostForm } from "@/entities/hidePostForm";
import { addPost, selectUserServices } from "@/entities/user";
import { PostFormContext } from "@/shared/ui/postForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const CreatePost = () => {
    const dispath = useDispatch<AppDispath>();
    const user = useSelector(selectUserServices).user;

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