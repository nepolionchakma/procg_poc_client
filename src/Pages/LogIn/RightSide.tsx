import { Button } from "../../components/ui/button";

import logo from "/Top_Nav_Icon/logo.png";
import language from "/LogIn/language.svg";
import down_arrow from "/LogIn/down_arrow.svg";
import { useAuthContext } from "@/Context/Authcontext";
import { useState } from "react";
const RightSide: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useAuthContext();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error: any) {
      console.error("login error", error.message);
    }
  };
  return (
    <div>
      <div className="p-4 flex flex-col gap-3 w-[448px] border">
        {/* form stsrt */}
        <div className="flex flex-col gap-3 ">
          <img className="w-[120px]" src={logo} alt="Logo" />
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl">Welcome to PROCG-POC Project</h3>
            <span className="text-slate-500  text-sm">
              Please enter your credentials to access your account.
            </span>
          </div>
        </div>
        <div className=" ">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-slate-500 text-sm" htmlFor="email">
                Email address
              </label>
              <input
                autoFocus
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter mail address"
                className="py-2 px-4 rounded-md text-sm border"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-slate-500 text-sm" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="py-2 px-4 rounded-md text-sm border"
              />
              <label
                className="flex flex-row-reverse text-url text-sm"
                htmlFor=""
              >
                Forget password?
              </label>
            </div>
            <div className="flex gap-4 text-sm">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div>
              <Button type="submit" className="w-full bg-login">
                Login
              </Button>
              <div className="flex items-center my-2">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500 text-sm">OR</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <Button className="w-full bg-button_sso">
                Continue with SSO
              </Button>
            </div>
            <div className="p-4 rounded-md bg-slate-200 text-sm">
              <span>
                By clicking Continue, you agree to our Terms of Service and
                Privacy Policy.
              </span>
            </div>
            <div className="flex gap-2 items-center justify-center text-sm">
              <img src={language} alt="language img" />
              <label>English</label>
              <img src={down_arrow} alt="down_arrow img" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default RightSide;
