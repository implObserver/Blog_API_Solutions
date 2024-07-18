import { useState } from "react"
import { containerAssembly } from "../lib/helper/containerAssembly";
import { Container, ContainerContext } from "../components/container";

export const Canvas = () => {
    const [containers, setContainers] = useState(containerAssembly());
    const fill = () => {
        return containers.map((container, index) => {
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