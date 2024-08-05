import { containerAssembly } from "../lib/helper/containerAssembly";
import { Container, ContainerContext } from "../components/container";
import { useCustomState } from "@/shared/lib/hooks/useCustomState";

export const Canvas = () => {
    const update = useCustomState();
    const containerContexts = containerAssembly();
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