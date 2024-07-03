import LeftSideNav from "../Nav/LeftSideNav";
import TopNavBar from "../Nav/TopNavBar";

const Root = () => {
  return (
    <>
      <div className="flex flex-col">
        <TopNavBar />
        <LeftSideNav />
      </div>
    </>
  );
};
export default Root;
