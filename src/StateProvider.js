import React, {createContext, useContext, useReducer} from "react";

// prepare the dataLayer
export const StateContext = createContext();

// wrap the app to provide the datalayer
export const StateProvider=({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    </StateContext.Provider>
)

// pull the info from the data layer
export const useStateValue=()=>useContext(StateContext);