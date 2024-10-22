import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import styles from '../styles/App.module.css'
import { scrollRestorationActions } from '@/features/scrollRestoration';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer/ui/Footer';
import { selectUserServices } from '@/entities/user';
import { getScroll, useAppDispatch } from '@/shared/lib';
import { FastAuth } from '@/features/fastAuth';

export const MainLayout: React.FC = () => {
    const { pathname } = useLocation();
    const dispatch = useAppDispatch();
    gsap.registerPlugin(ScrollToPlugin);
    const isAuth = useSelector(selectUserServices).isAuthenticated;
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
                {isAuth ? null : <FastAuth />}
                <Outlet />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};