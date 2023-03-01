import React, { createContext, useState } from "react";

export const GlobalState = createContext();

const GlobalStateContext = ({ children }) => {
  const [count, setCount] = useState(0);

  const info = {
    count,
    setCount,
  };

  return <GlobalState.Provider value={info}>{children}</GlobalState.Provider>;
};

export default GlobalStateContext;
