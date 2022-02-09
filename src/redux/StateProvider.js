import React, { createContext, useContext, useReducer } from "react";

//preparing the data layer *************************
export const StateContext = createContext();

//intialState -> what the data looks like when the app is loaded
//reducer-> it is clever and it listens to changes for alll that we needed from data
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

//hook which allows us to pull information from data layer ***************
export const useStateValue = () => useContext(StateContext);
