import { useMutation } from "@tanstack/react-query";
import api from "../services/axiosInstance";
import { useAuthStore } from "../store/authStore";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    _id: string;
    email: string;
    role: string;
    permissions: string[];
  };
}

export function useLogin() {
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: (data) =>
      api.post("/api/v1/auth/admin-login", data).then((res) => res.data),
    onSuccess: (data) => {
      setToken(data.token);
      setUser(data.user);
      // Optionally save user info to localStorage or Zustand
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("authUser", JSON.stringify(data.user));
    },
  });
}
