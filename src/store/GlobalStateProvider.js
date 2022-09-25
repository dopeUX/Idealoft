import Context from "./context";
import useGlobalState from "./appReducer";

const GlobalStateProvider = ({children}) =>{
   return (
    <Context.Provider
     value={useGlobalState()}>
      {children}
    </Context.Provider>
   )
}

export default GlobalStateProvider;