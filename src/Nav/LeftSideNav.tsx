import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { FileDown } from "lucide-react";
import { useNavContext } from "../Context/NavContext";
import { Finance } from "../assets/Left_Nav_Icon";

interface Nav {
  id: number;
  label: string;
  icon: String | React.ReactNode;
  in_navs?: {
    id: number;
    name: string;
    icon: String | React.ReactNode;
    link: string;
  }[];
}

const LeftSideNav: React.FC = () => {
  const { collapsed } = useNavContext();
  const location = useLocation();

  const navs: Nav[] = [
    {
      id: 0,
      label: "Finance",
      icon: <FileDown />,
      in_navs: [
        {
          id: 0,
          name: "Risk Management",
          icon: <FileDown />,
          link: "/risk-management",
        },
        {
          id: 1,
          name: "Control Management",
          icon: <FileDown />,
          link: "/control-management",
        },
        {
          id: 2,
          name: "Issue Management",
          icon: <FileDown />,
          link: "/issue-management",
        },
      ],
    },
    {
      id: 1,
      label: "Continuous monitoring",
      icon: <FileDown />,
      in_navs: [
        { id: 0, name: "Risk Management", icon: <FileDown />, link: "/" },
      ],
    },
  ];
  //

  //SubMenu Active ..........
  const getMenuItemStyle = (path: string): React.CSSProperties => {
    const isActive = location.pathname === path;
    return {
      color: isActive ? "red" : "inherit",
      backgroundColor: isActive ? "#D3E2FD" : "",
    };
  };

  const getMenuItemClassName = (path: string): string => {
    const isActive = location.pathname === path;
    const isPending = false;
    return isActive ? "active" : isPending ? "pending" : "";
  };

  return (
    <div className="flex gap-5 fixed mt-[70px]">
      <div>
        <Sidebar collapsed={collapsed} transitionDuration={1000}>
          <div className="bg-nav h-screen">
            <Menu transitionDuration={600}>
              {navs.map((nav) => (
                <div key={nav.id}>
                  <SubMenu icon={nav.icon} label={nav.label}>
                    {nav.in_navs?.map((in_nav) => (
                      <MenuItem
                        key={in_nav.id}
                        component={<NavLink to={in_nav.link} />}
                        icon={in_nav.icon}
                        style={getMenuItemStyle(in_nav.link)}
                        className={getMenuItemClassName(in_nav.link)}
                      >
                        {in_nav.name}
                      </MenuItem>
                    ))}
                  </SubMenu>
                </div>
              ))}

              <MenuItem>Documentation</MenuItem>
              <MenuItem>Calendar</MenuItem>
            </Menu>
          </div>
        </Sidebar>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default LeftSideNav;
