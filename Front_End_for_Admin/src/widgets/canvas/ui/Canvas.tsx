import { containerAssembly } from "../lib/helper/containerAssembly";
import { Container } from "../components/container";
import { useCustomState } from "@/shared/lib/hooks/useCustomState";
import { ContainerContext } from "@/features/containerOS";

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