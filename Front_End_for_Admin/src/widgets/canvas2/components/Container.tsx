import { AppDispath } from "@/app/model/store/Store"
import { selectCounter } from "@/entities/element/model/slice/counter/selectors"
import { counterActions } from "@/entities/element/model/slice/counter/slice"

import React, { ReactNode, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

interface Props {
    props?: string;
    children?: ReactNode;  // Исправлено с 'childre' на 'children'
}

export const Container: React.FC<Props> = React.memo(({ props }) => {
    const [state, setState] = useState(false);
    
    const dispatch = useDispatch<AppDispath>();

    const clickHandle = () => {
        dispatch(counterActions.increment());
    };

    return (
        <div onClick={clickHandle}>
            {Date.now()}
            {/* Выводим значение счетчика */}
            {/* Если переданы дочерние элементы, выводим их */}
        </div>
    );
});