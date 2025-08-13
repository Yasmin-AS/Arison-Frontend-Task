import { useMutation, useQueryClient } from "@tanstack/react-query";
import { suspendUser } from "../services/api";

export function useSuspend() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: suspendUser,
    onSuccess: () => {
      // Refresh drivers list after suspension
      queryClient.invalidateQueries({ queryKey: ["drivers"] });
    },
  });
}
