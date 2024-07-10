import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import SideSubMenu from "./SideSubMenu";
interface NavItem {
  id: number;
  name: string;
  icon: string;
  link: string;
}

interface NavGroupProps {
  id: number;
  label: string;
  icon: string;
  inNavs: NavItem[];
  isOpen: boolean;
  collapsed: boolean;
  toggleGroup: (groupId: number) => void;
  activeGroup: number | null;
  subMenuActiveValue: string;
  path:string;
}
const SideMenu: React.FC<NavGroupProps> = ({
  id,
  label,
  icon,
  inNavs,
  isOpen,
  collapsed,
  toggleGroup,
  activeGroup,
  subMenuActiveValue,
  path,
}) => {
  return (
    <>
      <div
        onClick={() => toggleGroup(id)}
        className={`border-b border-slate-400 border-dashed relative cursor-pointer duration-300 ${
          subMenuActiveValue === label ? "bg-menu_active" : " bg-slate-50"
        }`}
      >
        <span
          className={`h-[56px] w-1 left-0 top-0 absolute duration-500  ${
            subMenuActiveValue === label && "bg-red-600"
          }`}
        />
        <div
          className={`flex gap-2 items-center justify-between p-4 ${
            isOpen && "bg-slate-200"
          }`}
        >
          <div className={`flex justify-between gap-2 `}>
            <img src={icon} alt={label} className="w-6 h-6 " />
            {collapsed ? (
              subMenuActiveValue === label ? (
                <span className="h-2 w-2 rounded-full bg-red-600" />
              ) : (
                <span className="h-2 w-2 rounded-full bg-slate-400" />
              )
            ) : (
              ""
            )}
            {!collapsed && <span>{label}</span>}
          </div>
          {!collapsed && (
            <span className=" ">
              {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          )}
        </div>
        {(isOpen || (collapsed && activeGroup === id)) && (
          <div
            // background subMenu Item
            className={`${
              collapsed
                ? "absolute left-24 top-1 p-2 bg-menu_collapse rounded shadow-2xl z-50"
                : " bg-slate-50"
            }`}
          >
            <div className="flex flex-col gap-2 p-1">
              {inNavs.map((item) => (
                <SideSubMenu
                  key={item.id}
                  {...item}
                  collapsed={collapsed}
                  path={path} />
              ))}
            </div>
            {/* ractangle */}
            <div
              className="
              absolute -left-4 top-2
              border-t-[15px]
              border-t-transparent
              border-r-[16px]
              border-r-bg-menu_collapse
              border-b-[15px]
              border-b-transparent
              duration-500 transition-transform"
            />
          </div>
        )}
      </div>
    </>
  );
};
export default SideMenu;
