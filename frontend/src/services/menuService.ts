import type { MenuProps } from "antd";
import DashboardIcon from "../assets/icons/Icon.png";
import UserIcon from "../assets/icons/Icon1.png";
import AdminIcon from "../assets/icons/Icon2.png";
import PricingIcon from "../assets/icons/Icon3.png";
import FinanceIcon from "../assets/icons/Icon4.png";
import SupportIcon from "../assets/icons/Icon5.png";
import LoyaltyIcon from "../assets/icons/Icon5.png";
import AccountIcon from "../assets/icons/settings.png";
import HelpIcon from "../assets/icons/Icon6.png";

// export type MenuItem = Required<MenuProps>["items"][number];

export const menuItems = [
  {
    key: "general-heading",
    label: "GENERAL",
    type: "group",
    children: [],
  },
  {
    key: "dashboard",
    label: "Dashboard",
    icon: DashboardIcon,
  },
  {
    key: "user-management",
    label: "User Management",
    icon: UserIcon,
    children: [
      { key: "riders", label: "Riders" },
      { key: "drivers", label: "Drivers" },
    ],
  },
  {
    key: "admin-management",
    label: "Admin Management",
    icon: AdminIcon,
    children: [
      { key: "admin", label: "Admin" },
      { key: "support1", label: "Support" },
      { key: "support2", label: "Support" },
    ],
  },
  {
    key: "pricing",
    label: "Pricing & Tariffs",
    icon: PricingIcon,
  },
  {
    key: "financials",
    label: "Financials",
    icon: FinanceIcon,
  },
  {
    key: "support-disputes",
    label: "Support & Disputes",
    icon: SupportIcon,
  },
  {
    key: "loyalty",
    label: "Loyalty & Rewards",
    icon: LoyaltyIcon,
  },
  {
    key: "tools-heading",
    label: "TOOLS",
    type: "group",
    children: [],
  },
  {
    key: "account",
    label: "Account & Settings",
    icon: AccountIcon,
  },
  {
    key: "help",
    label: "Help",
    icon: HelpIcon,
  },
];
