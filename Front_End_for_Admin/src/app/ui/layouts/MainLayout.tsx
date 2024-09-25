import { AppDispath, store } from '@/app/model/store/Store';
import { selectScrollRestoration } from '@/features/scrollRestoration/model/slice/selectors';
import { scrollRestorationActions } from '@/features/scrollRestoration/model/slice/slice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Header } from '@/widgets/header';
import styles from '../styles/App.module.css'
//localStorage.clear()
const getScroll = (pathname) => {
    const scrolls = store.getState().scrollRestoration.scrolls;
    const scroll = scrolls.find(scroll => scroll.pathname === pathname);
    return scroll;
}

export const MainLayout: React.FC = () => {
    const { pathname } = useLocation();
    const dispatch = useDispatch<AppDispath>();
    console.log('ddddddd')
    gsap.registerPlugin(ScrollToPlugin);

    useEffect(() => {
        const updateInterval = setInterval(() => {
            const scroll: Scroll = {
                pathname,
                scrollY: window.scrollY,
            };
            dispatch(scrollRestorationActions.setScroll(scroll));
        }, 500);
        return () => {
            clearInterval(updateInterval);
        };
    }, [pathname])

    useEffect(() => {
        const scroll = getScroll(pathname);
        if (scroll) {
            setTimeout(() => {
                gsap.to(window, { duration: 0, scrollTo: { y: scroll.scrollY, autoKill: false } });
            }, 100);
        }
    }, [pathname]);

    return (
        <div className={styles.main_layout}>
            <header>
                <Header></Header>
            </header>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;