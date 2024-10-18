import { Container } from "../components/container";
import { ContainerContext } from "@/features/containerOS";
import { useParams } from "react-router-dom";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath } from "@/app/model/store/Store";
import { modelsToContainers } from "../lib/helper/containerAssembly";
import { getVirtualPost } from "../../../entities/element/lib/helper/getVirtualPost";
import { selectOpenedPost } from "@/entities/postState/model/slice/openedPost/selectors";
import { backupsActions } from "@/entities/postState/model/slice/backups/slice";

export const Canvas = React.memo(() => {
    const { postid } = useParams();
    const postId = parseInt(postid);
    const post = useSelector(selectOpenedPost).openedPost;
    const dispatch = useDispatch<AppDispath>();

    if (!post || postId !== post.id) {
        return <div>Нет доступа или пост не существует</div>;
    }

    const models = post.models;
    const containerContexts = useMemo(() => modelsToContainers(models), [models]);

    useEffect(() => {
        return () => {
            const virtualPost = getVirtualPost();
            dispatch(backupsActions.addBackup(virtualPost));
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