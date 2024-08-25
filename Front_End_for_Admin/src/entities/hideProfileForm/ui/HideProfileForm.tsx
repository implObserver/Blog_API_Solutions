import { ProfileForm } from "@/shared/ui/profileForm";
import { useState } from "react"

export const HideProfileForm = () => {
    const [isHide, setHide] = useState(true);

    const handleClick = () => {
        setHide(false);
    }

    if (isHide) {
        return (
            <div>
                <button onClick={handleClick}>Edit</button>
            </div>
        )
    } else {
        return (
            <>
                <ProfileForm></ProfileForm>
                <button>Cancel</button>
            </>
        )
    }
}