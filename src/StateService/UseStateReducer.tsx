import { useReducer } from "react";

const UseStateReducer = (initialState:any, handleReducer:any) => {

    const [state, dispatch]  = useReducer(initialState, handleReducer);

    return {
        state,
        dispatch
    }
}


export default UseStateReducer;