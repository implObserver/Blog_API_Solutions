import { AppDispath, store } from "@/app/model/store/Store";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispath>();

export const getCounter = () => {
    const count = store.getState().counter.count;
    return count;
};

export const getVirtualPost = () => {
    const virtualPost = store.getState().virtualPost.post;
    return virtualPost;
};

export const getFocusIndex = () => {
    const index = store.getState().focus.index;
    return index;
}

export const getVirtualAuthor = () => {
    const virtualAuthor = store.getState().virtualPost.post.author;
    return virtualAuthor;
}

export const getAuthState = () => {
    const isAuth = store.getState().userServices.isAuthenticated;
    return isAuth;
}

export const getBackups = () => {
    const backups = store.getState().backups.backups;
    return backups;
}

export const getScroll = (pathname: string) => {
    const scrolls = store.getState().scrollRestoration.scrolls;
    const scroll = scrolls.find(scroll => scroll.pathname === pathname);
    return scroll;
}
//useAnythingData = () => {...}