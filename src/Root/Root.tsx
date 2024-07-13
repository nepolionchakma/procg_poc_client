import { useEffect, useState } from "react";
import Bottom from "../HomeView/Bottom";
import Top from "../HomeView/Top";
import { useAuthContext } from "@/Context/Authcontext";
import { tracingChannel } from "diagnostics_channel";
import LogIn from "@/Pages/LogIn/LogIn";

const Root = () => {
  const { access_token, setAccess_token, isLoading } = useAuthContext();
  useEffect(() => {
    const storeData = localStorage.getItem("access_token");
    setAccess_token(storeData as string);
  }, []);

  if (access_token) {
    return (
      <main>
        {/* Home View  */}
        <div className="flex flex-col">
          {/* Top  */}
          <Top />
          {/* Bottom  */}
          <Bottom />
        </div>
      </main>
    );
  }

  return <LogIn />;
};
export default Root;
