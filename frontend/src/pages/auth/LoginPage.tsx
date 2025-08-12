import AuthLayout from "../../layouts/auth/AuthLayouts";
import Login from "../../components/auth/Login";

export default function LoginPage() {
  return (
    <div className="bg-white">
      <AuthLayout title="Hi, Welcome Back! 👋">
        <Login />
      </AuthLayout>
    </div>
  );
}
