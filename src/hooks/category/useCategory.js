import { getCategoryById } from "@/utils/api/category";
import { useQuery } from "@tanstack/react-query";

export const useCategory = (id) => {
  return useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const response = await getCategoryById(id);
      return response.success ? response.data : {};
    },
  });
};
