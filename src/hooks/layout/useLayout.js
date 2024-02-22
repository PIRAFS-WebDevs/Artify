import { getLayoutById } from "@/utils/api/layout";
import { useQuery } from "@tanstack/react-query";

export const useLayout = (id) => {
  return useQuery({
    queryKey: ["layout"],
    queryFn: async () => {
      const response = await getLayoutById(id);
      return response.success ? response.data : {};
    },
  });
};
