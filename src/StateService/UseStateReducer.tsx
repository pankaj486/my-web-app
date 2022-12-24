import { useReducer } from "react";

const UseStateReducer = (initialState:any, handleReducer:any) => {

    const [items, dispatch]  = useReducer(initialState, handleReducer);

    return {
        items,
        dispatch
    }
}


export default UseStateReducer;