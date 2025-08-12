import { Layout, Menu } from "antd";
import type { ReactNode } from "react";
import SideBar from "../../components/admin/common/SideBar";

const { Header, Sider, Content } = Layout;

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="bg-gray-100">
      <Layout className="min-h-screen w-screen overflow-hidden bg-white">
        <Sider width={240} className="bg-white flex flex-col justify-between">
          <SideBar />
        </Sider>

        <Layout>
          <Header className="bg-white shadow px-6 flex items-center justify-between">
            {/* Search, Notifications, Profile */}
          </Header>
          <Content className="p-6">{children}</Content>
        </Layout>
      </Layout>
    </div>
  );
}
