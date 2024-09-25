import { Container } from "../components/container";
import { ContainerContext } from "@/features/containerOS";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath } from "@/app/model/store/Store";
import { modelsToContainers } from "../lib/helper/containerAssembly";
import { getVirtualModels } from "../lib/helper/getVirtualModels";
import { selectUserServices, servicesActions, updatePost } from "@/entities/user";
import { modlelsOfOpenedPostActions } from "@/entities/element";
import { snapshotSliceActions } from "@/entities/postPreview";
import { getSnapshot } from "../lib/helper/getSnapshot";

export const Canvas = React.memo(() => {
    const location = useLocation();
    const post_id = location.state;

    if (post_id || post_id === 0) {
        const dispatch = useDispatch<AppDispath>();
        const service = useSelector(selectUserServices);
        const user = service.user;
        const posts = user.posts;
        const post = posts.find(post => post.id === post_id);
        let elements = posts.length === 0 ? [] : post.elements;
        const containerContexts = modelsToContainers(elements);

        const updateSnapshot = () => {
            const models = getVirtualModels();
            dispatch(snapshotSliceActions.updateSnapshot(models));
        };
    
        const finalizeSnapshot = () => {
            updateSnapshot();
            const snapshot = getSnapshot();
            dispatch(updatePost(snapshot));
        };
    

        useEffect(() => {
            dispatch(modlelsOfOpenedPostActions.uploadPosts(elements));
        }, [])

        useEffect(() => {
            const handle = () => {
                const updateContext: UpdateModels = {
                    post_id,
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
            const updateInterval = setInterval(updateSnapshot, 5000);
            return () => {
                clearInterval(updateInterval);
                finalizeSnapshot();
            };
        }, []);

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