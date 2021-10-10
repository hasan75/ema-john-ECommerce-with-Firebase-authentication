import React, { Children, createContext } from 'react';

export const AuthContex = createContext();

const AuthProvider = ({ children }) => {
  return <AuthContex.Provider>{children}</AuthContex.Provider>;
};

export default AuthProvider;
