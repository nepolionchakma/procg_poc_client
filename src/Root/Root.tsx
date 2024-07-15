import { useState } from "react";
import Bottom from "../HomeView/Bottom";
import Top from "../HomeView/Top";
import { useAuthContext } from "@/Context/Authcontext";
import LogIn from "@/Pages/LogIn/LogIn";
import IsLoading from "@/components/Loading/IsLoading";

const Root = () => {
  const { access_token, isLoading } = useAuthContext();
  const [useThemeMode, setUseThemeMode] = useState("light");
  if (isLoading && !access_token) return <IsLoading />;
  if (access_token && !isLoading)
    return (
      <main>
        {/* Home View  */}
        <div className="flex flex-col  ">
          {/* Top  */}
          <Top />
          {/* Bottom  */}
          <Bottom />
        </div>
      </main>
    );
  if (!isLoading && !access_token) return <LogIn />;
};
export default Root;
