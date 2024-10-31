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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className={style.container}>
            <Slider {...settings} className={style.slider}>
                {posts.map((post, index) => (
                    <Item post={post} key={`${post.id}-${index}`}></Item>
                ))}
            </Slider>
        </div>
    );
};

