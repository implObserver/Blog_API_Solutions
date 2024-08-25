import { AppDispath } from "@/app/model/store/Store";
import { HideProfileForm } from "@/entities/hideProfileForm";
import { LoginForm } from "@/entities/loginForm";
import { selectUserServices, updateProfile } from "@/entities/user";
import { ProfileFormContext } from "@/shared/ui/profileForm/lib/context/Context";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const UpdateOfProfile = () => {
    const dispath = useDispatch<AppDispath>();
    const user = useSelector(selectUserServices).user;

    const [data, setData] = useState({
        nickname: '',
        gender: '',
        age: 0,
    })

    const formContext: ProfileFormContextType = {
        data,
        setData,
        username: user.name,
    }

    const updateData: UpdateData = {
        user,
        profile: data,
    }

    const submitHandle = (e) => {
        e.preventDefault();
        dispath(updateProfile(updateData));
    }

    return (
        <div onSubmit={submitHandle}>
            <ProfileFormContext.Provider value={formContext}>
                <HideProfileForm></HideProfileForm>
            </ProfileFormContext.Provider>
        </div>
    )
}