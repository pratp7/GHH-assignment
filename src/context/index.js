import { createContext, useContext } from "react";

const Context = createContext();

export const ContextProvider = ({children}) => {

    const values = {

    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )

}

// To reuse it within our Application
export const useContextData = () => {
    const context = useContext(Context)
    if(!context){
        throw new Error("context must be used within a Context Provider");
    }
    return context;
}
