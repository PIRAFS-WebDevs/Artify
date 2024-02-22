import { getProductById } from "@/utils/api/product";
import { useQuery } from "@tanstack/react-query";

export const useProduct = (id) => {
  return useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const response = await getProductById(id);
      return response.success ? response.data : {};
    },
  });
};
