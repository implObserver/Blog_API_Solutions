import { Container } from "../components/container";
import { ContainerContext } from "@/features/containerOS";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath } from "@/app/model/store/Store";
import { modelsToContainers } from "../lib/helper/containerAssembly";
import { selectPosts } from "@/entities/showcasePosts/model/slice/selectors";
import { getVirtualModels, getVirtualPost, smartUpdate } from "../lib/helper/getVirtualModels";
import { updatePost } from "@/entities/user/model/slice/services/thunks/update/updatePost";
import { postsActions } from "@/entities/showcasePosts/model/slice/slice";
import { selectUserServices } from "@/entities/user";
import { SpinnerLoader } from "@/shared/ui/spinnerLoader";
import { updateModelsOfPost } from "@/entities/user/model/slice/services/thunks/update/updateModelsOfPost";
import { modlelsOfOpenedPostActions } from "@/entities/element/model/slice/elementsOfPost/slice";

export const Canvas = React.memo(() => {
    const service = useSelector(selectUserServices);
    const user = service.user;
    const index = useLocation().state;
    const dispatch = useDispatch<AppDispath>();
    const posts = useSelector(selectPosts).posts;
    console.log(posts)
    let elements = posts.length === 0 ? [] : posts[index].elements;

    useEffect(() => {
        const models = getVirtualModels()
        const context: PostUpdate = {
            id: posts[index].id,
            models,
        }
        dispatch(updateModelsOfPost(context))
    }, []);

    const containerContexts = modelsToContainers(elements);

    const fill = () => {
        return containerContexts.map((containerContext, index) => {
            const container = {
                containerContext,
            };

            return (
                <ContainerContext.Provider value={container} key={index}>
                    <Container />
                </ContainerContext.Provider>
            );
        });
    };
    if (!service.isPending) {
        return (
            <div>
                {fill()}
            </div>
        );
    }
});