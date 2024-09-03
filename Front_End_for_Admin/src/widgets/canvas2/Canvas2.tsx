import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Container } from './components/Container';
import { selectPosts } from '@/entities/showcasePosts/model/slice/selectors';
import { modelsToContainers } from './lib/containerAssembly';
import { AppDispath } from '@/app/model/store/Store';
import { postsActions } from '@/entities/showcasePosts/model/slice/slice';

export const Canvas2 = React.memo(() => {
    const state = useLocation().state;

    const [elements, setElements] = useState(state.elements);

    const containerContexts = useMemo(() => modelsToContainers(elements), []);

    const fill = useMemo(() => {
        return containerContexts.map((containerContext, index) => {
            const container = {
                context: containerContext,
            };

            // Передай контейнер в компонент Container, если он это поддерживает
            return (
                <Container key={index} props={'props'} />
            );
        });
    }, [containerContexts]); // Зависимость от containerContexts

    return (
        <div>
            {fill}
        </div>
    );
});