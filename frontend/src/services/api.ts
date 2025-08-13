import axios from "axios";

// axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1",
});

// Suspend User API
export const suspendUser = async ({
  userId,
  type,
  suspensionDays,
  suspensionDate,
  reason,
}: {
  userId: string;
  type: "temporary" | "permanent";
  suspensionDays?: number;
  suspensionDate?: string;
  reason: string;
}) => {
  const { data } = await api.patch(`admin/users/${userId}/suspend`, {
    type,
    suspensionDays,
    suspensionDate,
    reason,
  });
  return data;
};
