import { AppDispath, store } from '@/app/model/store/Store';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Header } from '@/widgets/header';
import styles from '../styles/App.module.css'
import { selectUserServices } from '@/entities/user';
import { Backup } from '@/features/backup';
import { scrollRestorationActions } from '@/features/scrollRestoration';
import { FastAuth } from '@/features/fastAuth';
import { Footer } from '@/widgets/footer';

const getScroll = (pathname: string) => {
    const scrolls = store.getState().scrollRestoration.scrolls;
    const scroll = scrolls.find(scroll => scroll.pathname === pathname);
    return scroll;
}

export const MainLayout: React.FC = () => {
    const { pathname } = useLocation();
    const dispatch = useDispatch<AppDispath>();
    gsap.registerPlugin(ScrollToPlugin);
    const isAuth = useSelector(selectUserServices).isAuthenticated;

    // Сохранение текущей позиции прокрутки при скролле
    useEffect(() => {
        const handleScroll = () => {
            const scroll: Scroll = {
                pathname,
                scrollY: window.scrollY,
            };
            dispatch(scrollRestorationActions.setScroll(scroll));
        };

        // Добавление обработчика события скролла
        window.addEventListener('scroll', handleScroll);

        // Удаление обработчика события при размонтировании компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname, dispatch]);

    // Восстановление положения прокрутки при изменении пути
    useEffect(() => {
        const scroll = getScroll(pathname);
        if (scroll) {
            // Используем задержку для корректной работы прокрутки
            setTimeout(() => {
                gsap.to(window, {
                    duration: 0,
                    scrollTo: { y: scroll.scrollY, autoKill: false },
                });
            }, 100);
        }
    }, [pathname]);

    return (
        <div className={styles.main_layout}>
            <header>
                <Header />
            </header>
            <div className={styles.body}>
                <Backup>
                    {isAuth ? null : <FastAuth />}
                    <Outlet />
                </Backup>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};