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

export const Canvas = React.memo(() => {
    const location = useLocation();
    const index = location.state;
    if (index) {
        const dispatch = useDispatch<AppDispath>();
        const service = useSelector(selectUserServices);
        const user = service.user;
        const posts = user.posts;
        let elements = posts.length === 0 ? [] : posts[index].elements;
        const containerContexts = modelsToContainers(elements);

        useEffect(() => {
            dispatch(modlelsOfOpenedPostActions.uploadPosts(elements));

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