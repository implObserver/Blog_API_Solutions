import { AppDispath, store } from '@/app/model/store/Store';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import styles from '../styles/App.module.css'
import { scrollRestorationActions } from '@/features/scrollRestoration';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer/ui/Footer';

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

    useEffect(() => {
        const handleScroll = () => {
            const scroll: Scroll = {
                pathname,
                scrollY: window.scrollY,
            };
            dispatch(scrollRestorationActions.setScroll(scroll));
        };

        // Добавляем обработчик события scroll
        window.addEventListener('scroll', handleScroll);

        // Убираем обработчик при размонтировании
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname, dispatch]);

    useEffect(() => {
        const scroll = getScroll(pathname);
        if (queryParams.get('slider') || !scroll) {
            queryParams.delete('slider');
            gsap.to(window, { duration: 0, scrollTo: { y: 0, autoKill: false } });
        } else {
            gsap.to(window, { duration: 0, scrollTo: { y: scroll.scrollY, autoKill: false } });
        }
    }, [pathname, queryParams]);

    return (
        <div className={styles.main_layout}>
            <header>
                <Header />
            </header>
            <div>
                <Outlet />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};