import { useState } from 'react';

export const useCustomState = <T = boolean>(state1: T = false as T, state2: T = true as T) => {
    const [state, setNewState] = useState(state1);

    const toggle = () => {
        const newState = state === state1 ? state2 : state1;
        setState(newState);
    };

    const setState = (state: T) => {
        setNewState(state);
    }

    const getState = () => {
        return state;
    };

    const result: CustomState<T> = { toggle, getState, setState };

    return result;
};