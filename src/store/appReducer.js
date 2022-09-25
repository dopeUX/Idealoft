import { useReducer } from "react";

const initState = {
    themeDark:true
}

const appReducer = (state, action) =>{
    switch(action.type){
      case 'toggle-theme':
        return {
            ...state,
            themeDark:!state.themeDark
        }
        default :{
            return state;
        }
    }
}

const useGlobalState = () => {
    const [state, dispatch] = useReducer(appReducer, initState);
    return {state, dispatch};
}

export default useGlobalState;