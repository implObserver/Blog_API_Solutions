import { Container } from "../components/container";
import { ContainerContext } from "@/features/containerOS";
import { useCustomState } from "@/shared/lib";
import { containerAssembly } from "../lib";
import { useShowcasePostsContext } from "@/entities/showcasePosts";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath } from "@/app/model/store/Store";
import { modelsToContainers } from "../lib/helper/containerAssembly";
import { selectPosts } from "@/entities/showcasePosts/model/slice/selectors";

export const Canvas = () => {
    const update = useCustomState();
    const index = useLocation().state;
    console.log(index)
    const post = useSelector(selectPosts).posts[index];
    const containerContexts = modelsToContainers(post.elements);

    const fill = () => {
        return containerContexts.map((containerContext, index) => {
            const container: Container = {
                canvasUpdate: update,
                containerContext,
            }
            return (
                <ContainerContext.Provider value={container} key={index}>
                    <Container></Container>
                </ContainerContext.Provider>
            )
        })
    }

    return (
        <div>
            {fill()}
        </div>
    )
}