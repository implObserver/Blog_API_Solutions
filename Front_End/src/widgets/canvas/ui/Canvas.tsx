import { Container } from "../components/container";
import { useLocation } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { selectUserServices } from "@/entities/user";
import { ContainerContext } from "../lib/context/Context";
import { selectPosts } from "@/entities/user/model/slice/posts/selectors";


export const Canvas = React.memo(() => {
    const location = useLocation();
    const post_id = location.state;

    if (post_id || post_id === 0) {
        const posts = useSelector(selectPosts).posts;
        const post = posts.find(post => post.id === post_id);
        const models = posts.length === 0 ? [] : post.elements;
        const fill = () => {
            return models.map((model, index) => {
                const container = {
                    model,
                    index,
                };
                return (
                    <ContainerContext.Provider value={container} key={`container_${model.id}`}>
                        <Container />
                    </ContainerContext.Provider>
                );
            });
        };

        return (
            <div>
                {fill()}
            </div>
        );

    } else {
        return (
            <div>Empty</div>
        )
    }
});