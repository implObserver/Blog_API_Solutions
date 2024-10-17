import { Container } from "../components/container";
import { ContainerContext } from "@/features/containerOS";
import { useParams } from "react-router-dom";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath } from "@/app/model/store/Store";
import { modelsToContainers } from "../lib/helper/containerAssembly";
import { getVirtualModels } from "../../../entities/element/lib/helper/getVirtualModels";
import { selectOpenedPost } from "@/entities/postState/model/slice/openedPost/selectors";
import { updatePost } from "@/entities/postState";

export const Canvas = React.memo(() => {
    const { postid } = useParams();
    const postId = parseInt(postid);
    const post = useSelector(selectOpenedPost).openedPost;
    const dispatch = useDispatch<AppDispath>();
    console.log(post)

    if (!post || postId !== post.id) {
        return <div>Нет доступа или пост не существует</div>;
    }

    const elements = post.elements;
    const containerContexts = useMemo(() => modelsToContainers(elements), [elements]);

    useEffect(() => {
        return () => {
            const snapshot: Snapshot = {
                postid: parseInt(postid),
                elements: getVirtualModels(),
            };
            dispatch(updatePost(snapshot));
        };
    }, []);

    const renderContainers = () =>
        containerContexts.map(({ model }, index) => (
            <ContainerContext.Provider value={{ containerContext: containerContexts[index] }} key={`container_${model.id}`}>
                <Container />
            </ContainerContext.Provider>
        ));

    return <div>{renderContainers()}</div>;
});