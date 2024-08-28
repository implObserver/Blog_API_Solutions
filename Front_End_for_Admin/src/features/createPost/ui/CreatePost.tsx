import { AppDispath } from "@/app/model/store/Store";
import { HidePostForm } from "@/entities/hidePostForm/ui/HidePostForm";
import { HideProfileForm } from "@/entities/hideProfileForm";
import { LoginForm } from "@/entities/loginForm";
import { selectUserServices, updateProfile } from "@/entities/user";
import { PostFormContext } from "@/shared/ui/postForm/lib/context/Context";
import { ProfileFormContext } from "@/shared/ui/profileForm/lib/context/Context";
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
        console.log('create post')
        //dispath(updateProfile(data));
    }

    return (
        <div onSubmit={submitHandle}>
            <PostFormContext.Provider value={formContext}>
                <HidePostForm></HidePostForm>
            </PostFormContext.Provider>
        </div>
    )
}