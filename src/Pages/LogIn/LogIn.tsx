import LogInLeftImage from "../../../public/LogIn/LogInLeft.svg";
import logo from "../../../public/Top_Nav_Icon/logo.png";
import language from "../../../public/LogIn/language.svg";
import down_arrow from "../../../public/LogIn/down_arrow.svg";
const LogIn = () => {
  return (
    <div className="w-screen h-screen flex ">
      <div className="w-[55%] h-screen flex items-center justify-center border-r">
        <img className="w-2/6" src={LogInLeftImage} alt="Log In Left Image" />
      </div>
      <div className="w-[45%] h-screen flex items-center justify-center">
        <div className="p-4 border flex flex-col gap-7 w-[70%]">
          <div className="flex flex-col gap-6 border">
            <img className="w-1/2" src={logo} alt="Logo" />
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl">Welcome to PROCG-POC Project</h3>
              <span className="text-slate-500">
                Please enter your credentials to access your account.
              </span>
            </div>
          </div>
          <div className="border">
            <form>
              <div className="flex flex-col gap-1">
                <label className="text-slate-500" htmlFor="email">
                  Email address
                </label>
                <input
                  autoFocus
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter mail address"
                  className="py-2 px-4 rounded-md border"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-slate-500" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  className="py-2 px-4 rounded-md border"
                />
                <label className="flex flex-row-reverse text-url" htmlFor="">
                  Forget password?
                </label>
              </div>
              <div className="flex gap-4">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Remember me</label>
              </div>
              <button>Login</button>
              <label htmlFor="">OR</label>
              <button>Continue with SSO</button>
              <div className="p-6 rounded-md bg-slate-200">
                <span>
                  By clicking Continue, you agree to our Terms of Service and
                  Privacy Policy.
                </span>
              </div>
              <div className="flex items-center justify-center">
                <img src={language} alt="language img" />
                <label htmlFor="">English</label>
                <img src={down_arrow} alt="down_arrow img" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
