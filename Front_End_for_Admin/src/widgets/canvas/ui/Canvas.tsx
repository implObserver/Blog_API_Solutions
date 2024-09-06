import { Container } from "../components/container";
import { ContainerContext } from "@/features/containerOS";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath } from "@/app/model/store/Store";
import { modelsToContainers } from "../lib/helper/containerAssembly";
import { getVirtualModels } from "../lib/helper/getVirtualModels";
import { selectUserServices, servicesActions } from "@/entities/user";
import { modlelsOfOpenedPostActions } from "@/entities/element/model/slice/elementsOfPost/slice";
import { updatePost } from "@/entities/user/model/slice/services/thunks/update/updatePost";
import { snapshotSliceActions } from "@/entities/showcasePosts/model/slice/snapshot/slice";

export const Canvas = React.memo(() => {
    const location = useLocation();
    const index = location.state;
    if (index) {
        const dispatch = useDispatch<AppDispath>();
        const service = useSelector(selectUserServices);
        const user = service.user;
        const posts = user.posts;
        const post = posts[index];
        let elements = posts.length === 0 ? [] : post.elements;
        const containerContexts = modelsToContainers(elements);
        console.log(elements)

        useEffect(() => {
            dispatch(modlelsOfOpenedPostActions.uploadPosts(elements));
        }, [])

        useEffect(() => {
            const handle = () => {
                const updateContext: UpdateModels = {
                    index,
                    models: getVirtualModels(),
                }
                dispatch(servicesActions.updateModels(updateContext));
            };

            window.addEventListener('beforeunload', handle);

            return () => {
                window.removeEventListener('beforeunload', handle);
            };

        }, [])

        useEffect(() => {
            const updateInterval = setInterval(() => {
                const models = getVirtualModels();
                dispatch(snapshotSliceActions.updateSnapshot(models));
            }, 5000);
            return () => {
                clearInterval(updateInterval);
            };
        }, [])

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