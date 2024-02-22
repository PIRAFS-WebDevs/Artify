import { getUsers } from "@/utils/api/user";
import { useQuery } from "@tanstack/react-query";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await getUsers();
      return response.success ? response.data : [];
    },
  });
};
