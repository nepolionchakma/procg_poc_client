import { Link, NavLink, json } from "react-router-dom";
import Logo from "../assets/Top_Nav_Icon/Logo.svg";
import Home from "../assets/Top_Nav_Icon/Home.svg";
import Alerts from "../assets/Top_Nav_Icon/Alert.svg";
import Tasks from "../assets/Top_Nav_Icon/Task.svg";
import Notification from "../assets/Top_Nav_Icon/Notification.svg";
import Profile from "../assets/Top_Nav_Icon/Profile.svg";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavContext } from "../Context/NavContext";
import { useEffect } from "react";

const TopNavBar = () => {
  const { collapsed, setCollapsed } = useNavContext();

  useEffect(() => {
    function stringToBoolean(value: string | null): boolean {
      return value === "true";
    }
    const stringValue: string | null = localStorage.getItem("isCollapsed");
    const booleanValue: boolean =
      stringValue !== null ? stringToBoolean(stringValue) : false;

    setCollapsed(booleanValue);
  }, []);

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
    localStorage.setItem("isCollapsed", JSON.stringify(!collapsed));
  };
  const navs = [
    { id: 0, name: "Home", icon: Home, link: "/" },
    { id: 1, name: "Alerts", icon: Alerts, link: "/alerts" },
    { id: 2, name: "Task", icon: Tasks, link: "/task" },
    { id: 3, name: "Notification", icon: Notification, link: "/notification" },
  ];

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
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
      </div>
      {/* Right side  */}
      <div className="flex gap-7 items-center">
        {navs.map((nav) => (
          <div key={nav.id} className="flex items-center justify-center">
            <NavLink to={nav.link}>
              {({ isActive, isTransitioning }) => (
                <div
                  className={`flex items-center justify-center gap-3 px-5 py-[10px] rounded-md duration-300 ${
                    isActive ? "bg-menu_active " : ""
                  } ${isTransitioning ? "slide" : ""}`}
                >
                  <img className="h-5 w-5" src={nav.icon} alt="" />
                  <span>{nav.name === "Profile" ? "" : nav.name}</span>
                </div>
              )}
            </NavLink>
          </div>
        ))}
        <div>
          <img className="cursor-pointer" src={Profile} alt="" />
        </div>
      </div>
    </div>
  );
};
export default TopNavBar;
