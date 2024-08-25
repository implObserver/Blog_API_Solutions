import { useLocalStorage } from "@/shared/lib";
import { time } from "console";

export const loadToken = () => {
    const { getItem } = useLocalStorage('post_constructor_token');
    const token = getItem();
    console.log(token)
    return token;
}