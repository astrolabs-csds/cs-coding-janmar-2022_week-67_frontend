// Import functions to create and provision a Context Component
import React, { useReducer, createContext, useCallback, createElement } from 'react';

// Create the Context componet
export const Context = createContext();


// Create an initial state
const initialState = {
    "firstName": "Dany",
    "lastName": "Entezari",
    "email": "dany@astrolabs.com"
}


export function UserContextProvider(props) {

    return (
        <Context.Provider 
        value={initialState}
        >
            {props.children}
        </Context.Provider>
    )
};