import Menu from "../../components/admin/UserMgt";
import AdminLayout from "../../layouts/admin/AdminLayout";

function AdminDashboardPage() {
  return (
    <div className="w-full min-h-screen">
      <AdminLayout>
        <Menu />
      </AdminLayout>
    </div>
  );
}

export default AdminDashboardPage;
