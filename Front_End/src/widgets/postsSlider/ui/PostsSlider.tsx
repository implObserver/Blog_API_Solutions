import { selectPosts } from "@/entities/user/model/slice/posts/selectors";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Item } from "../components/item/ui/Item";
import style from './style/PostsSlider.module.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export const PostsSlider = () => {
    const settings = {
        dots: true, // Пункты навигации
        infinite: true, // Зацикливание
        speed: 500, // Скорость перехода
        slidesToShow: 2, // Количество отображаемых слайдов
        slidesToScroll: 1 // Количество слайдов, прокручиваемых за один раз
    };

    const posts = useSelector(selectPosts).posts;

    return (
        <div className={style.container}>
            <Slider {...settings} className={style.slider}>
                {posts.map(post => (
                    <Item post={post} key={post.id}></Item>
                ))}
            </Slider>
        </div>
    );
};

