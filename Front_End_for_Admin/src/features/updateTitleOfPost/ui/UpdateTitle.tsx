import { usePostPreviewContext } from '@/entities/postPreview';
import { useState } from 'react';
import { PostForm, PostFormContext } from '@/shared/ui/postForm';
import { useAppDispatch } from '@/shared/lib';
import { updateTitle } from '@/entities/postState';

export const UpdateTitle = ({ postid }) => {
    const dispatch = useAppDispatch();
    const context = usePostPreviewContext();

    const [data, setData] = useState({
        title: context.text.getState(),
    })

    const formContext: PostFormContext = {
        data,
        setData,
    }

    const clickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLDivElement;
        if (element.textContent === 'Cancel') {
            context.toggle.setState(false);
        }
    }

    const submitHandle = (e) => {
        const title: UpdateTitle = {
            postid,
            title: data.title,
        }
        dispatch(updateTitle(title));
        context.toggle.setState(false);
    }

    return (
        <div onSubmit={submitHandle} onClick={clickHandle}>
            <PostFormContext.Provider value={formContext}>
                <PostForm />
            </PostFormContext.Provider>
        </div>
    )
}