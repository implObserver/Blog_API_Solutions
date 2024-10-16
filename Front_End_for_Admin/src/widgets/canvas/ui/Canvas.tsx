import { Container } from "../components/container";
import { ContainerContext } from "@/features/containerOS";
import { useParams } from "react-router-dom";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath } from "@/app/model/store/Store";
import { modelsToContainers } from "../lib/helper/containerAssembly";
import { getVirtualModels } from "../../../entities/element/lib/helper/getVirtualModels";
import { updatePost } from "@/entities/user";
import { snapshotSliceActions } from "@/entities/postPreview";
import { getSnapshot } from "../lib/helper/getSnapshot";
import { selectPosts } from "@/entities/postState/model/slice/posts/selectors";

export const Canvas = React.memo(() => {
    const { postid } = useParams();
    const postId = parseInt(postid);
    const post = useSelector(selectPosts).openedPost;
    const dispatch = useDispatch<AppDispath>();
    console.log(post)
    if (!post || postId !== post.id) {
        return <div>Нет доступа или пост не существует</div>;
    }

    const elements = post.elements;
    const containerContexts = useMemo(() => modelsToContainers(elements), [elements]);

    const updateSnapshot = () => {
        const models = getVirtualModels();
        dispatch(snapshotSliceActions.updateSnapshot(models));
    };

    useEffect(() => {
        return () => {
            updateSnapshot();
            const snapshot = getSnapshot();
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