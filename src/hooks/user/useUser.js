import { getUserByEmail } from "@/utils/api/user";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../useAuthContext";

export const useUser = () => {
  const { user } = useAuthContext();

  return useQuery({
    queryKey: ["user", user],
    queryFn: async () => {
      const response = await getUserByEmail(user?.email);
      return response.success ? response.data : {};
    },
  });
};
