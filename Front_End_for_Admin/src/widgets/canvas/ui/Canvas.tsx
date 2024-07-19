import { useState } from "react"
import { containerAssembly } from "../lib/helper/containerAssembly";
import { Container, ContainerContext } from "../components/container";
import { useSelector } from "react-redux";
import { selectElements } from "@/entities/element";
import { modelToElement } from "@/entities/element/lib/helper/ModelsToElements";
import { useCustomState } from "@/shared/lib/hooks/useCustomState";

export const Canvas = () => {
    const update = useCustomState();
    const containerContexts = containerAssembly();
    console.log(`canv:${containerContexts[3]}`)
    const fill = () => {
        return containerContexts.map((containerContext, index) => {
            console.log(containerContext)
            const container: Container = {
                canvasUpdate: update,
                containerContext,
            }

            console.log(container)

            return (
                <ContainerContext.Provider value={container} key={index}>
                    <Container></Container>
                </ContainerContext.Provider>
            )
        })
    }

    const keyDownHandle = (e: React.KeyboardEvent<HTMLDivElement>) => {

    }


    return (
        <div onKeyDown={keyDownHandle}>
            {fill()}
        </div>
    )
}