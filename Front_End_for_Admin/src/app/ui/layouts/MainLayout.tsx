import { AppDispath } from '@/app/model/store/Store';
import { selectScrollRestoration } from '@/features/scrollRestoration/model/slice/selectors';
import { scrollRestorationActions } from '@/features/scrollRestoration/model/slice/slice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import debounce from 'debounce';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export const MainLayout: React.FC = () => {
    const { pathname } = useLocation();
    const dispatch = useDispatch<AppDispath>();
    const scrolls = useSelector(selectScrollRestoration).scrolls;
    gsap.registerPlugin(ScrollToPlugin);
    useEffect(() => {
        const updateInterval = setInterval(() => {
            const scroll: Scroll = {
                pathname,
                scrollY: window.scrollY,
            };
            console.log(scroll)
            dispatch(scrollRestorationActions.setScroll(scroll));
        }, 100);
        return () => {
            clearInterval(updateInterval);
        };
    }, [pathname])

    useEffect(() => {
        console.log('nooooo')
        const scroll = scrolls.find(scroll => scroll.pathname === pathname);

        if (scroll) {
            console.log(scroll.scrollY)
            setTimeout(() => {
                gsap.to(window, { duration: 0, scrollTo: { y: scroll.scrollY, autoKill: false } });
            }, 100);
        }
    }, [pathname]);

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default MainLayout;