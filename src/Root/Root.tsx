import Bottom from "../HomeView/Bottom";
import Top from "../HomeView/Top";

const Root = () => {
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
};
export default Root;
