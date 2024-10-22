import { useSelector } from "react-redux";
import style from './style/PostsSlider.module.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { selectPosts } from "@/entities/postState";
import { Item } from "../components/item";

export const PostsSlider = () => {
    const posts = useSelector(selectPosts).posts;

    const settings = {
        dots: true, // Пункты навигации
        infinite: true, // Зацикливание
        speed: 500, // Скорость перехода
        slidesToShow: posts.length > 6 ? 3 : 2, // Количество отображаемых слайдов
        slidesToScroll: 1 // Количество слайдов, прокручиваемых за один раз
    };

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

