import { AppDispath } from "@/app/model/store/Store";
import { HideProfileForm } from "@/entities/hideProfileForm";
import { selectUserServices, updateProfile } from "@/entities/user";
import { ProfileFormContext } from "@/shared/ui/profileForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const UpdateOfProfile = () => {
    const dispath = useDispatch<AppDispath>();
    const user = useSelector(selectUserServices).user;
    const username = user.profile.name? user.profile.name : user.email;

    const [data, setData] = useState({
        nickname: '',
        gender: '',
        age: 0,
    })

    const formContext: ProfileFormContextType = {
        data,
        setData,
        username,
    }

    const submitHandle = (e) => {
        e.preventDefault();
        dispath(updateProfile(data));
    }

    return (
        <div onSubmit={submitHandle}>
            <ProfileFormContext.Provider value={formContext}>
                <HideProfileForm></HideProfileForm>
            </ProfileFormContext.Provider>
        </div>
    )
}