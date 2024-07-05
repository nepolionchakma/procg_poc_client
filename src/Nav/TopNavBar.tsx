import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Top_Nav_Icon/Logo.svg";
import Home from "../assets/Top_Nav_Icon/Home.svg";
import Alerts from "../assets/Top_Nav_Icon/Alert.svg";
import Tasks from "../assets/Top_Nav_Icon/Task.svg";
import Notification from "../assets/Top_Nav_Icon/Notification.svg";
import Profile from "../assets/Top_Nav_Icon/Profile.svg";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavContext } from "../Context/NavContext";
import { useEffect, useState } from "react";
import { ArrowRightFromLine, Settings, Shield, UserCircle } from "lucide-react";
interface INav {
  id: number;
  name: string;
  icon: React.ImgHTMLAttributes<HTMLImageElement> | String | React.ReactNode;
  link: string;
}
interface IProfile {
  id: number;
  name: string;
  icon: React.ImgHTMLAttributes<HTMLImageElement> | String | React.ReactNode;
  // link: string;
}
const TopNavBar: React.FC = () => {
  const { collapsed, setCollapsed } = useNavContext();
  const [isOpenProfile, setIsOpenProfile] = useState<boolean>(false);
  const [activeUrl, setActiveUrl] = useState<number>();

  //set collapsed in localstorage
  useEffect(() => {
    function stringToBoolean(value: string | null): boolean {
      return value === "true";
    }
    const stringValue: string | null = localStorage.getItem("isCollapsed");
    const booleanValue: boolean =
      stringValue !== null ? stringToBoolean(stringValue) : false;

    setCollapsed(booleanValue);
  }, []);
  //set activeURL in localstorage
  useEffect(() => {
    const storedValue = localStorage.getItem("activeUrl");
    if (storedValue !== null) {
      setActiveUrl(JSON.parse(storedValue));
    } else {
      setActiveUrl(0);
    }
  }, []);

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
    localStorage.setItem("isCollapsed", JSON.stringify(!collapsed));
  };
  const handleActiveURL = (id: number) => {
    setActiveUrl(id);
    localStorage.setItem("activeUrl", JSON.stringify(id));
  };
  const navs: INav[] = [
    { id: 0, name: "Home", icon: Home, link: "/" },
    { id: 1, name: "Alerts", icon: Alerts, link: "/alerts" },
    { id: 2, name: "Task", icon: Tasks, link: "/task" },
    { id: 3, name: "Notification", icon: Notification, link: "/notification" },
  ];
  const profile: IProfile[] = [
    { id: 0, name: "profile", icon: <UserCircle /> },
    { id: 1, name: "Security", icon: <Shield /> },
    { id: 2, name: "Settings", icon: <Settings /> },
    { id: 3, name: "LogOut", icon: <ArrowRightFromLine /> },
  ];

  //handleProfile Click
  const handleProfile = () => {
    setIsOpenProfile(!isOpenProfile);
  };

  return (
    <div className="flex justify-between px-5 py-3 border shadow-lg bg-nav sticky top-0">
      {/* Left side  */}
      <div className="flex gap-4 items-center justify-center">
        <div className="bg-menu_collapse cursor-pointer p-1 rounded-full h-9 w-9 flex items-center justify-center">
          <div onClick={handleCollapsed}>
            {collapsed ? <FiMenu /> : <FiX />}
          </div>
        </div>
        <div>
          <Link to="/" onClick={() => handleActiveURL(0)}>
            <img src={Logo} alt="" />
          </Link>
        </div>
      </div>
      {/* Right side  */}
      <div className="flex gap-7 items-center">
        {navs.map((nav) => (
          <div key={nav.id} className="flex items-center justify-center">
            <NavLink
              to={nav.link}
              onClick={() => handleActiveURL(nav.id)}
              className={`${activeUrl === nav.id && "bg-menu_active rounded"}`}
            >
              <div
                className={`flex items-center justify-center gap-3 px-5 py-[10px] rounded-md duration-300 `}
              >
                <img className="h-5 w-5" src={nav.icon as string} alt="" />
                <span>{nav.name === "Profile" ? "" : nav.name}</span>
              </div>
            </NavLink>
            {/* I see in the UI Screen, Home option is also showing selected along
            with an option from the Side NavMenu bar - which is not reflecting
            the correct visual effect. Please put the Side Navigation Menu
            hierarchy in a JSON file and render from there so it is easier to
            modify in that file when we like to change it - let me know if you
            need any clarification.
            <NavLink to={nav.link}>
              {({ isActive, isTransitioning }) => (
                <div
                  className={`flex items-center justify-center gap-3 px-5 py-[10px] rounded-md duration-300 ${
                    isActive ? "bg-menu_active " : ""
                  } ${isTransitioning ? "slide" : ""}`}
                >
                  <img className="h-5 w-5" src={nav.icon as string} alt="" />
                  <span>{nav.name === "Profile" ? "" : nav.name}</span>
                </div>
              )}
            </NavLink> */}
          </div>
        ))}
        <div className="relative">
          <img
            className="cursor-pointer"
            src={Profile}
            alt="profile"
            onClick={handleProfile}
          />
        </div>
        {isOpenProfile && (
          <div className="w-48 bg-menu_active absolute right-2 top-14 rounded flex flex-col py-4 duration-500">
            <div className="border-l-[15px] border-l-transparent border-b-[25px] border-b-menu_active border-r-[15px] border-r-transparent absolute right-3 -top-4 duration-500 transition-transform" />

            {profile.map((p) => (
              <div
                key={p.id}
                className="flex gap-3 p-2 hover:bg-menu_collapse border cursor-pointer"
              >
                <div>{p.icon as string}</div>
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
