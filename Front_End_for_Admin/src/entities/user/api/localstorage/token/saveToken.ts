import { useLocalStorage } from "@/shared/lib";

export const saveToken = (token: string) => {
    console.log(token)
    const { setItem } = useLocalStorage('post_constructor_token');
    setItem(token);
}