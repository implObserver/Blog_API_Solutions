import { loadUser } from "@/entities/user/api/localstorage/user/loadUser";
import Cookies from 'js-cookie';

export const initialState: ServicesDataType = {
    isAuth: false,
    isPending: false,
    user: null,
}