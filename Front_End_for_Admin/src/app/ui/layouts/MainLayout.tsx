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
import { Footer } from '@/widgets/footer/ui/Footer';
import { selectUserServices } from '@/entities/user';
import { FastAuth } from '@/features/fastAuth/ui/FastAuth';

const getScroll = (pathname: string) => {
    const scrolls = store.getState().scrollRestoration.scrolls;
    const scroll = scrolls.find(scroll => scroll.pathname === pathname);
    return scroll;
}

export const MainLayout: React.FC = () => {
    const { pathname } = useLocation(); // Получение текущего пути
    const dispatch = useDispatch<AppDispath>();
    gsap.registerPlugin(ScrollToPlugin); // Регистрация плагина для прокрутки
    const isAuth = useSelector(selectUserServices).isAuth; // Проверка авторизации пользователя

    // Сохранение текущей позиции прокрутки в Redux store с интервалом 500 мс
    useEffect(() => {
        const updateInterval = setInterval(() => {
            const scroll: Scroll = {
                pathname,
                scrollY: window.scrollY,
            };
            dispatch(scrollRestorationActions.setScroll(scroll)); // Сохранение состояния прокрутки
        }, 500);
        return () => {
            clearInterval(updateInterval); // Очистка интервала при размонтировании компонента
        };
    }, [pathname]);

    // Восстановление положения прокрутки при изменении пути
    useEffect(() => {
        const scroll = getScroll(pathname);
        if (scroll) {
            setTimeout(() => {
                gsap.to(window, { 
                    duration: 0, 
                    scrollTo: { y: scroll.scrollY, autoKill: false } 
                });
            }, 100); // Задержка для корректной работы прокрутки
        }
    }, [pathname]);

    return (
        <div className={styles.main_layout}>
            <header>
                <Header />
            </header>
            <div>
                {isAuth ? null : <FastAuth />} 
                <Outlet /> {/* Компонент для рендеринга вложенных маршрутов */}
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout;