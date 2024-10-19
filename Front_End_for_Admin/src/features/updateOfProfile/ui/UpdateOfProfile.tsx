import { AppDispath } from "@/app/model/store/Store";
import { ToggleProfileForm } from "@/entities/toggleProfileForm";
import { selectUserServices, updateProfile } from "@/entities/user";
import { ProfileFormContext } from "@/shared/ui/profileForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const UpdateOfProfile = () => {
    const dispath = useDispatch<AppDispath>();
    const user = useSelector(selectUserServices).user;
    const username = user.username;

    const [data, setData] = useState({
        nickname: user.profile.name,
        gender: user.profile.gender,
        age: user.profile.age,
    })

    const formContext: ProfileFormContext = {
        formData: data,
        setFormData: setData,
        username,
    }

    const submitHandle = (e) => {
        e.preventDefault();
        dispath(updateProfile(data));
    }

    return (
        <div onSubmit={submitHandle}>
            <ProfileFormContext.Provider value={formContext}>
                <ToggleProfileForm></ToggleProfileForm>
            </ProfileFormContext.Provider>
        </div>
    )
}