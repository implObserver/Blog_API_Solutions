import { AppDispath } from "@/app/model/store/Store";
import {
    counterActions,
    elementToModel,
    ImageArea,
    modlelsOfOpenedPostActions,
    selectModelsOfOpenedPost,
    useElementContext
} from "@/entities/element";
import { addPostImages } from "@/entities/postPreview/lib/helper/loadImageToIDB";
import { postsActions } from "@/entities/postState/model/slice/posts/slice";
import { servicesActions } from "@/entities/user";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const AddImage = () => {
    const context = useElementContext();
    const dispath = useDispatch<AppDispath>();
    const params = useParams();
    const postid = parseInt(params.postid);
    const model = context.model;
    const models = useSelector(selectModelsOfOpenedPost).models;


    const clickHandle = () => {
        dispath(counterActions.increment());
        const url = Date.now();
        const imageArea = ImageArea();
        imageArea.setUrl(url.toString())
        const newModel = elementToModel(imageArea);
        const postContext: CellOfPost = {
            postid,
            model,
            newModel,
        }
        const image: ImageType = {
            code: url.toString(),
            blob: null,
            isRetry: false,
        }

        //dispath(modlelsOfOpenedPostActions.addModel(modelContext));
        //dispath(servicesActions.updateModels(updateContext));
        dispath(postsActions.addModel(postContext));
        addPostImages(postid, image);
        context.dropdownStatus.toggle();
    }
    return (
        <div onMouseDown={clickHandle}>
            Image
        </div>
    )
}