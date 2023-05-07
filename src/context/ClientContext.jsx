/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

export const ClientContext = createContext(null);

export const ClientProvider = ({children}) => {
  const [isLoggedIn, setIslogged] = useState(true);

  return (
    <ClientContext.Provider value={{ isLoggedIn }}>
      {children}
    </ClientContext.Provider>
  );
};