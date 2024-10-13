import { AppDispath, store } from '@/app/model/store/Store';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import styles from '../styles/App.module.css'
import { scrollRestorationActions } from '@/features/scrollRestoration';
import { Header } from '@/widgets/header';

const getScroll = (pathname: string) => {
    const scrolls = store.getState().scrollRestoration.scrolls;
    const scroll = scrolls.find(scroll => scroll.pathname === pathname);
    return scroll;
}

export const MainLayout: React.FC = () => {
    const { pathname } = useLocation();
    const dispatch = useDispatch<AppDispath>();
    gsap.registerPlugin(ScrollToPlugin);
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const paramValue = queryParams.get('slider');

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
                if (queryParams) {
                    queryParams.set('slider', 'false');
                    navigate(`${location.pathname}?${queryParams.toString()}`);
                    gsap.to(window, { duration: 0, scrollTo: { y: 0, autoKill: false } });
                } else {
                    gsap.to(window, { duration: 0, scrollTo: { y: scroll.scrollY, autoKill: false } });
                }
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