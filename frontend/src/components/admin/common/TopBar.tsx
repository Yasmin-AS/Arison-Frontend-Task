import { Badge, Space, Input } from "antd";
import { MailOutlined, BellOutlined } from "@ant-design/icons";
import ProfileImg from "../../../assets/images/profile.jpg";
const Admin = [{ Name: "Mensur M.", Role: "Super Admin" }];
function TopBar() {
  const { Search } = Input;
  const onSearch = (value: string) => {
    console.log("Search:", value);
  };
  const onclick = () => {
    console.log("Notification clicked");
  };

  return (
    <div className="py-2 flex items-center justify-between ">
      {" "}
      {/* Left side: Search */}
      <div className="w-1/3 flex items-center">
        <Search placeholder="Search" onSearch={onSearch} />
      </div>
      {/* Right side: Icons */}
      <Space size="large">
        <Badge count={3}>
          <MailOutlined className="text-2xl" onClick={onclick} />
        </Badge>
        <Badge count={5}>
          <BellOutlined className="text-2xl" onClick={onclick} />
        </Badge>
        {Admin.map((admin, index) => (
          <div className="flex items-center gap-2" key={index}>
            <img
              src={ProfileImg}
              alt="Profile"
              className="w-8 h-8 rounded-lg"
            />
            <div key={index} className="flex flex-col text-sm items-center">
              <span className="font-sm">{admin.Name}</span>
              <span className="text-gray-500 text-xs">{admin.Role}</span>
            </div>
          </div>
        ))}
      </Space>
    </div>
  );
}

export default TopBar;
