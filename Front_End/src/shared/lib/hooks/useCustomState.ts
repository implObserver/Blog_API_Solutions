import { useState } from 'react';

export const useCustomState = (state1 = false, state2 = true) => {
    const [state, setNewState] = useState(state1);

    const toggle = () => {
        const newState = state === state1 ? state2 : state1;
        setState(newState);
    };

    const setState = (state: boolean) => {
        setNewState(state);
    }

    const getState = () => {
        return state;
    };

    const result: CustomState = { toggle, getState, setState };
    
    return result;
};