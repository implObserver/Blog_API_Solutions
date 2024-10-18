import { Container } from "../components/container";
import { useLocation, useParams } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { selectUserServices } from "@/entities/user";
import { ContainerContext } from "../lib/context/Context";
import { selectPosts } from "@/entities/postState/model/slice/posts/selectors";

export const Canvas = React.memo(() => {
    const params = useParams();
    const post_id = parseInt(params.postid);
    const posts = useSelector(selectPosts).posts;
    const post = posts.find(post => post.id === post_id);

    if (!post) {
        return (
            <div>Поста не существует</div>
        )
    }
    if (post_id || post_id === 0) {
        const models = posts.length === 0 ? [] : post.models;
        const fill = () => {
            return models.map((model, index) => {
                const container = {
                    model,
                    index,
                };
                return (
                    <ContainerContext.Provider value={container} key={`container_${model.id}+${post_id}`}>
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