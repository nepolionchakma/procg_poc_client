import { useAuthContext } from "@/Context/Authcontext";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import "../../../src/App.css";
const LogIn = () => {
  const { isLoading } = useAuthContext();
  return (
    <div className="w-[1200px] h-screen flex justify-center mx-auto">
      {isLoading ? (
        // <div className="flex items-center justify-center">
        //   <img
        //     src="https://www.dukan.me/_nuxt/img/progress_loader.8f32937.gif"
        //     alt=""
        //   />
        // </div>

        <div className="flex items-center justify-center h-screen w-screen">
          <div className="loader flex justify-between w-80">
            <div className="w-8 h-8 bg-red-500 rounded-full repeat-infinite duration-900 animate-ping"></div>
            <div className="w-8 h-8 bg-red-500 rounded-full repeat-infinite duration-900 animate-ping"></div>
            <div className="w-8 h-8 bg-red-500 rounded-full repeat-infinite duration-900 animate-ping"></div>
            <div className="w-8 h-8 bg-red-500 rounded-full repeat-infinite duration-900 animate-ping"></div>
          </div>
        </div>
      ) : (
        <div className="w-[1200px] h-screen flex justify-center mx-auto">
          <div className="flex items-center justify-center px-[174px]">
            <LeftSide />
          </div>
          <div className="w-[590px] flex items-center justify-center ">
            <RightSide />
          </div>
        </div>
      )}
    </div>
  );
};
export default LogIn;
