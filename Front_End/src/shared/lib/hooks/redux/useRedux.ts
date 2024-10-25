import { AppDispath, store } from "@/app/model/store/Store";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispath>();

export const getAuthState = () => {
    const isAuth = store.getState().userServices.isAuthenticated;
    return isAuth;
}

export const getScroll = (pathname: string) => {
    const scrolls = store.getState().scrollRestoration.scrolls;
    const scroll = scrolls.find(scroll => scroll.pathname === pathname);
    return scroll;
}

export const getUserID = () => {
    const userID = store.getState().userServices.user.id;
    return userID;
}