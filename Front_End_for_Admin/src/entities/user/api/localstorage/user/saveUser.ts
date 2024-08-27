import { useLocalStorage } from "@/shared/lib";
import Cookies from 'js-cookie';

export const saveUser = (user: User) => {
    console.log(Cookies.get('token'));
    const { setItem } = useLocalStorage('post_constructor_user');
    setItem(user);
}