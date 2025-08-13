import { useNavigate } from "react-router-dom";
import { Menu } from "antd";

import DashboardIcon from "../../../assets/icons/Icon.png";
import UserMgmtIcon from "../../../assets/icons/Icon1.png";
import AdminMgmtIcon from "../../../assets/icons/Icon2.png";
import PricingIcon from "../../../assets/icons/Icon3.png";
import FinanceIcon from "../../../assets/icons/Icon4.png";
import SupportIcon from "../../../assets/icons/Icon5.png";
import LoyaltyIcon from "../../../assets/icons/Icon5.png";
import AccountIcon from "../../../assets/icons/settings.png";
import HelpIcon from "../../../assets/icons/Icon6.png";
import ProfileImg from "../../../assets/images/profile.jpg";
import CollapseImg from "../../../assets/icons/Vector.png";
const Admin = [{ Name: "Mensur Mohammed", Role: "Super Admin" }];

function SideBar() {
  const navigate = useNavigate();

  const menuItems = [
    {
      key: "general-heading",
      label: (
        <span className="text-base font-semibold text-gray-500">GENERAL</span>
      ),
      type: "group" as const,
      children: [],
    },
    {
      key: "dashboard",
      label: "Dashboard",
      icon: <img src={DashboardIcon} alt="" className="w-5 h-5" />,
    },
    {
      key: "user-management",
      label: "User Management",
      icon: <img src={UserMgmtIcon} alt="" className="w-5 h-5" />,
      children: [
        { key: "riders", label: "Riders" },
        { key: "drivers", label: "Drivers" },
      ],
    },
    {
      key: "admin-management",
      label: "Admin Management",
      icon: <img src={AdminMgmtIcon} alt="" className="w-5 h-5" />,
      children: [
        { key: "admin", label: "Admin" },
        { key: "support1", label: "Support" },
        { key: "support2", label: "Support" },
      ],
    },
    {
      key: "pricing",
      label: "Pricing & Tariffs",
      icon: <img src={PricingIcon} alt="" className="w-5 h-5" />,
    },
    {
      key: "financials",
      label: "Financials",
      icon: <img src={FinanceIcon} alt="" className="w-5 h-5" />,
    },
    {
      key: "support-disputes",
      label: "Support & Disputes",
      icon: <img src={SupportIcon} alt="" className="w-5 h-5" />,
    },
    {
      key: "loyalty",
      label: "Loyalty & Rewards",
      icon: <img src={LoyaltyIcon} alt="" className="w-5 h-5" />,
    },
    {
      key: "tools-heading",
      label: (
        <span className="text-[11px] font-semibold text-gray-400">TOOLS</span>
      ),
    },
    {
      key: "account",
      label: "Account & Settings",
      icon: <img src={AccountIcon} alt="" className="w-5 h-5" />,
    },
    {
      key: "help",
      label: "Help",
      icon: <img src={HelpIcon} alt="" className="w-5 h-5" />,
    },
  ];

  return (
    <div className="!bg-white flex flex-col justify-between">
      {" "}
      <div className="p-5 flex justify-between text-xl font-bold">
        <div>
          Voom<span className="text-blue-500">Go</span>
        </div>
        <img src={CollapseImg} className="w-6 h-6" />
      </div>
      {/* Menu */}
      <Menu
        mode="inline"
        items={menuItems}
        onClick={({ key }) => {
          if (!key.includes("-heading")) navigate(`/admin/${key}`);
        }}
        defaultOpenKeys={["user-management"]}
        className="flex-1 border-0 custom-menu"
      />
      {Admin.map((admin, index) => (
        <div
          className="bg-white p-4 border-t border-gray-200 flex items-center gap-3 fixed bottom-0 "
          key={index}
        >
          <img
            src={ProfileImg}
            alt="Profile"
            className="w-15 h-15 rounded-lg"
          />
          <div key={index} className="flex flex-col text-sm">
            <span className="font-medium">{admin.Name}</span>
            <span className="text-gray-500 text-xs">{admin.Role}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SideBar;
