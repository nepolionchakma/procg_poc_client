import { Link, NavLink } from "react-router-dom";
import Logo from "../../public/Top_Nav_Icon/logo.png";
import Profilea from "../../public/Top_Nav_Icon/Profile.svg";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavContext } from "../Context/NavContext";
import { useEffect, useState } from "react";
import { TopNav, Profile } from "./Navs.json";

interface INav {
  id: number;
  name: string;
  icon: React.ImgHTMLAttributes<HTMLImageElement> | string | React.ReactNode;
  link: string;
}

interface IProfile {
  id: number;
  name: string;
  icon: React.ImgHTMLAttributes<HTMLImageElement> | string | React.ReactNode;
}

const TopNavBar: React.FC = () => {
  const { collapsed, setCollapsed } = useNavContext();
  const [isOpenProfile, setIsOpenProfile] = useState<boolean>(false);
  const navs: INav[] = TopNav;
  const profile: IProfile[] = Profile;

  useEffect(() => {
    function stringToBoolean(value: string | null): boolean {
      return value === "true";
    }
    const stringValue: string | null = localStorage.getItem("isCollapsed");
    const booleanValue: boolean =
      stringValue !== null ? stringToBoolean(stringValue) : false;

    setCollapsed(booleanValue);
  }, [setCollapsed]);

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
    localStorage.setItem("isCollapsed", JSON.stringify(!collapsed));
  };

  const handleProfile = () => {
    setIsOpenProfile(!isOpenProfile);
  };

  return (
    <div className="flex justify-between px-5 py-2 border shadow-lg bg-nav sticky top-0 z-50">
      {/* Left side  */}
      <div className="flex gap-4 items-center justify-center">
        <div
          onClick={handleCollapsed}
          className=" bg-menu_collapse hover:bg-menu_active cursor-pointer p-1 rounded-full h-9 w-9 flex items-center justify-center"
        >
          <div>{collapsed ? <FiMenu /> : <FiX />}</div>
        </div>
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-36" />
          </Link>
        </div>
      </div>
      {/* Right side  */}
      <div className="flex gap-7 items-center relative">
        {navs.map((nav) => (
          <div key={nav.id} className="flex items-center justify-center">
            <NavLink to={nav.link}>
              {({ isActive, isPending }) => (
                <div
                  className={`flex items-center justify-center gap-3 px-5 py-[5px] rounded-md duration-300 ${
                    isActive ? "bg-menu_active" : ""
                  } ${isPending ? "slide" : ""}`}
                >
                  <img className="h-5 w-5" src={nav.icon as string} alt="" />
                  <span>{nav.name === "Profile" ? "" : nav.name}</span>
                </div>
              )}
            </NavLink>
          </div>
        ))}

        {/* User Profile  */}
        <div className="relative">
          <img
            className="cursor-pointer"
            src={Profilea}
            alt="profile"
            onClick={handleProfile}
          />
        </div>
        {isOpenProfile && (
          <div className="w-48 bg-menu_active absolute right-2 top-14 rounded flex flex-col pb-4 duration-500 p-4 gap-2 z-50">
            <div className="flex justify-end px-2">
              <i
                onClick={() => setIsOpenProfile(false)}
                className="fa-solid fa-xmark cursor-pointer rounded-full my-2"
              ></i>
            </div>
            <div className="border-l-[15px] border-l-transparent border-b-[25px] border-b-menu_active border-r-[15px] border-r-transparent absolute right-3 -top-4 duration-500 transition-transform" />

            {profile.map((p) => (
              <div
                key={p.id}
                className="flex gap-3 p-3 hover:bg-menu_collapse border cursor-pointer rounded-xl"
              >
                <div>
                  <i className={`fa-solid ${p.icon}`}></i>
                </div>
                <span>{p.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNavBar;
