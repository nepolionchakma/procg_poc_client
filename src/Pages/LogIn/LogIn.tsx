import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
const LogIn = () => {
  return (
    <div className="w-[1200px] h-screen flex justify-center mx-auto">
      <div className="flex items-center justify-center px-[174px]">
        <LeftSide />
      </div>
      <div className="w-[590px] flex items-center justify-center ">
        <RightSide />
      </div>
    </div>
  );
};
export default LogIn;
