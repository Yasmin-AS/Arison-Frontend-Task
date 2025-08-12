export const getToken = (): string | null => {
  return localStorage.getItem("accessToken");
};

export const setToken = (token: string): void => {
  localStorage.setItem("accessToken", token);
};

export const clearToken = (): void => {
  localStorage.removeItem("accessToken");
};

export const isAuthenticated = (): boolean => {
  return !!getToken();
};

export const handleApiError = (error: any): string => {
  if (error?.response?.data?.message) return error.response.data.message;
  if (error?.message) return error.message;
  return "Something went wrong. Please try again.";
};
export const navigate = (navigate: (path: string) => void): void => {
  const lastUrl = localStorage.getItem("lastUrl");
  const token = getToken();
  if (!token) {
    navigate("login");
  } else {
    navigate(lastUrl || "/");
  }
};
