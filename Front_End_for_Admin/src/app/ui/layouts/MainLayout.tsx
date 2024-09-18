import { AppDispath } from '@/app/model/store/Store';
import { selectScrollRestoration } from '@/features/scrollRestoration/model/slice/selectors';
import { scrollRestorationActions } from '@/features/scrollRestoration/model/slice/slice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
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
            dispatch(scrollRestorationActions.setScroll(scroll));
        }, 500);
        return () => {
            clearInterval(updateInterval);
        };
    }, [pathname])

    useEffect(() => {
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