import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { json } from "stream/consumers";

interface IAuthProviderProps {
  children: ReactNode;
}
interface IAuthTypes {
  login: (email: string, password: string) => void;
  access_token: string;
  setAccess_token: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
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
  const [access_token, setAccess_token] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const login = async (email: string, password: string) => {
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
      } else if (res.status === 408) {
        console.log("Invalid Credential.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(access_token, "access_token");
  const value = { login, access_token, setAccess_token, isLoading };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
