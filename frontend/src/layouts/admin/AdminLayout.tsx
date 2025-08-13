import { Layout, Menu } from "antd";
import type { ReactNode } from "react";
import SideBar from "../../components/admin/common/SideBar";
import TopBar from "../../components/admin/common/TopBar";

const { Header, Sider, Content } = Layout;

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div>
      <Layout>
        <Sider
          width={240}
          className="min-h-screen w-screen overflow-hidden !bg-white"
        >
          <SideBar />
        </Sider>

        <Layout>
          <Header className="!bg-white !shadow-none ">
            <TopBar />
          </Header>
          <Content className="p-4 bg-gray-100">{children}</Content>
        </Layout>
      </Layout>
    </div>
  );
}
