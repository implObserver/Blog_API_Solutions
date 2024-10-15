import { Container } from "../components/container";
import { ContainerContext } from "@/features/containerOS";
import { useParams } from "react-router-dom";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath } from "@/app/model/store/Store";
import { modelsToContainers } from "../lib/helper/containerAssembly";
import { getVirtualModels } from "../lib/helper/getVirtualModels";
import { selectUserServices, servicesActions, updatePost } from "@/entities/user";
import { modlelsOfOpenedPostActions } from "@/entities/element";
import { snapshotSliceActions } from "@/entities/postPreview";
import { getSnapshot } from "../lib/helper/getSnapshot";
import { selectPosts } from "@/entities/postState/model/slice/posts/selectors";
import { postsActions } from "@/entities/postState/model/slice/posts/slice";

export const Canvas = React.memo(() => {
    const params = useParams();
    const post_id = parseInt(params.postid);
    const postsService = useSelector(selectPosts);
    const posts = postsService.posts;
    const post = posts.find(post => post.id === post_id);
    console.log(post)
    if (!post) {
        return (
            <div>Нет доступа или пост не существует</div>
        )
    }
    if (post_id || post_id === 0) {
        const dispatch = useDispatch<AppDispath>();
        const elements = posts.length === 0 ? [] : post.elements;
        const containerContexts = useMemo(() => modelsToContainers(elements), [elements]);

        const finalizeSnapshot = async () => {
            const elements = getVirtualModels(post_id);
            const snapshot: SnapShot = {
                post_id,
                elements,
            }
            dispatch(updatePost(snapshot));
        };

        useEffect(() => {
            return () => {
                finalizeSnapshot();
            };
        }, []);

        const fill = () => {
            return containerContexts.map((containerContext, index) => {
                const container = {
                    containerContext,
                };
                return (
                    <ContainerContext.Provider value={container} key={`container_${containerContext.model.id}`}>
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