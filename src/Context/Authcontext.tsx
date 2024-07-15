import { createContext, ReactNode, useContext, useState } from "react";
import { ThemeContextProvider } from "./ThemeContext";

interface IAuthProviderProps {
  children: ReactNode;
}
interface IAuthTypes {
  login: (email: string, password: string) => void;
  logout: () => void;
  access_token: string | null;
  setAccess_token: React.Dispatch<React.SetStateAction<string | null>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}
export interface IUserData {
  user_id: number;
  user_name: string;
  access_token: string;
}
export const AuthContext = createContext<IAuthTypes | null>(null);
export const useAuthContext = () => {
  const authconsumer = useContext(AuthContext);
  if (!authconsumer) {
    throw new Error("Error inside database");
  }
  return authconsumer;
};
export const AuthContextProvider = ({ children }: IAuthProviderProps) => {
  const [access_token, setAccess_token] = useState<string | null>(
    localStorage.getItem("access_token")
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  // login
  const login = async (email: string, password: string) => {
    setError("");
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:2333/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
      });
      if (res.ok) {
        const user_res_data: IUserData = await res.json();
        setAccess_token(user_res_data.access_token);
        localStorage.setItem(
          "access_token",
          JSON.stringify(user_res_data.access_token)
        );
        setIsLoading(false);
      } else if (res.status === 404) {
        setError("Invalid Email");
        setIsLoading(false);
      } else if (res.status === 408) {
        setError("Invalid Credential");
        setIsLoading(false);
      }
    } catch (error) {
      setError("Sorry, Something wrong in Database");
      setIsLoading(false);
    }
  };
  // logout
  const logout = () => {
    localStorage.removeItem("access_token");
    setAccess_token("");
  };
  const value = {
    login,
    logout,
    access_token,
    setAccess_token,
    isLoading,
    setIsLoading,
    error,
    setError,
  };
  return (
    <AuthContext.Provider value={value}>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </AuthContext.Provider>
  );
};
