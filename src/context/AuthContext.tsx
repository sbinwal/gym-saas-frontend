import { createContext, useContext, useState } from "react";

type User = {
  name: string;
  email: string;
  image?: string;
};

type AuthContextType = {
  user: User | null;
  login: (data: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: any) => {

  const [user, setUser] = useState<User | null>(null);

  const login = (data: User) => {
    setUser(data);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext)!;
};