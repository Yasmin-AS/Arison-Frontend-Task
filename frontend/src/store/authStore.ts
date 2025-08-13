import { create } from "zustand";

interface User {
  _id: string;
  email: string;
  role: string;
  permissions: string[];
}

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  setToken: (token: string) => void;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("authToken"),
  user: localStorage.getItem("authUser")
    ? JSON.parse(localStorage.getItem("authUser") as string)
    : null,
  isAuthenticated: !!localStorage.getItem("authToken"),

  // Save token + update auth state
  setToken: (token) => {
    localStorage.setItem("authToken", token);
    set({ token, isAuthenticated: !!token });
  },

  // Save user info
  setUser: (user) => {
    localStorage.setItem("authUser", JSON.stringify(user));
    set({ user });
  },

  // Logout and clear everything
  logout: () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    set({ token: null, user: null, isAuthenticated: false });
  },
}));
