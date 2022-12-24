
const ReducerHandler = () => {

    function onSignUpReducer(state: any, action: any) {
        switch (action.type) {
          case "UPDATE_VALUE":
            return { ...state, [action.name]: action.value };
          default:
            return state;
        }
    }

    const onLoginReducer = (state: any, action: any) => {
        switch (action.type) {
          case "AUTHENTICATE":
            return { ...state, [action.name]: action.value };
          default:
            return state;
        }
    };

    return {
        onLoginReducer,
        onSignUpReducer
    }
}


export default ReducerHandler;