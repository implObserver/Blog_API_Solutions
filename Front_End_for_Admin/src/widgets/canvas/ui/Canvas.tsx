import { Container } from "../components/container";
import { ContainerContext } from "@/features/containerOS";
import { useParams } from "react-router-dom";
import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { modelsToContainers } from "../lib/helper/containerAssembly";
import { selectOpenedPost } from "@/entities/postState/model/slice/openedPost/selectors";
import { backupsActions } from "@/entities/postState/model/slice/backups/slice";
import { openedPostActions } from "@/entities/postState/model/slice/openedPost/slice";
import { getVirtualPost, useAppDispatch } from "@/shared/lib";

export const Canvas = React.memo(() => {
    const { postid } = useParams();
    const postId = parseInt(postid);
    const post = useSelector(selectOpenedPost).openedPost;
    const dispatch = useAppDispatch();

    if (!post || postId !== post.id) {
        return <div>Нет доступа или пост не существует</div>;
    }

    const models = post.models;
    const containerContexts = useMemo(() => modelsToContainers(models), [models]);

    useEffect(() => {
        return () => {
            const virtualPost = getVirtualPost();
            dispatch(backupsActions.addBackup(virtualPost));
            dispatch(openedPostActions.setOpenedPost(virtualPost));
        }
    }, [])

    const renderContainers = () =>
        containerContexts.map(({ model }, index) => (
            <ContainerContext.Provider value={{ containerContext: containerContexts[index] }} key={`container_${model.id}`}>
                <Container />
            </ContainerContext.Provider>
        ));

    return <div>{renderContainers()}</div>;
});