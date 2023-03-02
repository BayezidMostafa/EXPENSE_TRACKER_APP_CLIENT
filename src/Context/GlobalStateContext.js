import React, { createContext, useState } from "react";

export const GlobalState = createContext();

const GlobalStateContext = ({ children }) => {
  const [count, setCount] = useState(0);

  const [catInfo, setCatInfo] = useState("");
  const [amount, setAmount] = useState("");

  const info = {
    count,
    setCount,
    catInfo,
    setCatInfo,
    amount,
    setAmount,
  };

  return <GlobalState.Provider value={info}>{children}</GlobalState.Provider>;
};

export default GlobalStateContext;
