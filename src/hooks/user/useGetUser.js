import { getUserById } from "@/utils/api/user";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = (id) => {
  return useQuery({
    queryKey: ["userID", id],
    queryFn: async () => {
      const response = await getUserById(id);
      return response.success ? response.data : {};
    },
  });
};
