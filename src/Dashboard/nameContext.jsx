import React, { createContext, useState } from "react";

export const NameContext = createContext();

export const NameProvider = ({ children }) => {
  const [user, setUser] = useState("John");

  return (
    <NameContext.Provider value={{ user, setUser }}>{children}</NameContext.Provider>
  );
};

