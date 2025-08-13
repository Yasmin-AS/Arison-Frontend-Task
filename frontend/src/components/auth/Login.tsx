import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { useAuthStore } from "../../store/authStore";
import { Form, Input, Button, Checkbox } from "antd";

export default function Login() {
  const navigate = useNavigate();
  const setToken = useAuthStore((s) => s.setToken);
  const setUser = useAuthStore((s) => s.setUser);
  const loginMutation = useLogin();

  const onFinish = (values: { email: string; password: string }) => {
    loginMutation.mutate(values, {
      onSuccess: (res) => {
        // Save token and user in Zustand (and localStorage)
        setToken(res.token);
        setUser(res.user);

        // Navigate to admin dashboard
        navigate("/admin");
      },
      onError: (err) => {
        // Optional: Show error feedback
        console.error("Login failed:", err);
      },
    });
  };

  return (
    <div className="items-center justify-center">
      <Form
        layout="vertical"
        onFinish={onFinish}
        className="w-full"
        autoComplete="off"
      >
        <Form.Item label="Email address" name="email">
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <div className="flex justify-between text-gray-500 items-center">
            <Checkbox>Remember me</Checkbox>
            <a href="#" className="text-gray-500">
              Forgot password?
            </a>
          </div>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            block
            htmlType="submit"
            loading={loginMutation.isPending}
          >
            Log in
          </Button>
        </Form.Item>

        {loginMutation.isError && (
          <p className="text-red-500 text-center">Invalid credentials</p>
        )}
      </Form>
    </div>
  );
}
