import React, { createContext, useCallback, useState, useContext } from "react";
import api from "../services/api";

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  user: object;
}

interface AuthState {
  token: string;
  user: object;
}

const AuthContext = createContext({} as AuthContextData);

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@GoBarber:token");
    const user = localStorage.getItem("@GoBarber:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("/sessions", {
      email,
      password,
    });
    const { token, user } = response.data;

    localStorage.setItem("@GoBarber:token", token);
    localStorage.setItem("@GoBarber:user", JSON.stringify(user));

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
