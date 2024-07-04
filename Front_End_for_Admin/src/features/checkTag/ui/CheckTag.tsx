import { Tag, TagContext } from "@/shared/ui/tag"

export const CheckTag = () => {
    return (
        <TagContext.Provider value="tag">
            <Tag></Tag>
        </TagContext.Provider>
    )
}