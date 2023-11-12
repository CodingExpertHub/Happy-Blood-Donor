import React, { createContext, useContext, useState, ReactNode } from "react";

interface LoginDataContextProps {
  userId: string | null;
  setUserId: React.Dispatch<React.SetStateAction<string | null>>;
  userType: string | null;
  setUserType: React.Dispatch<React.SetStateAction<string | null>>;
}

const LoginDataContext = createContext<LoginDataContextProps | null>(null);

interface LoginDataProviderProps {
  children: ReactNode;
}

export const LoginDataProvider: React.FC<LoginDataProviderProps> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [userType, setUserType] = useState<string | null>(null);

  const contextValue: LoginDataContextProps = {
    userId,
    setUserId,
    userType,
    setUserType,
  };

  return (
    <LoginDataContext.Provider value={contextValue}>
      {children}
    </LoginDataContext.Provider>
  );
};

export const useLoginData = (): LoginDataContextProps => {
  const context = useContext(LoginDataContext);
  if (!context) {
    throw new Error("useLoginData must be used within a LoginDataProvider");
  }
  return context;
};
