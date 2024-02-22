import { getCategories } from "@/utils/api/category";
import { useQuery } from "@tanstack/react-query";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await getCategories();
      return response.success ? response.data : [];
    },
  });
};
