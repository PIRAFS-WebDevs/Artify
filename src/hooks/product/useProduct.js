import { getProductById } from "@/utils/api/product";
import { useQuery } from "@tanstack/react-query";
import { useAllValueContext } from "../useAllValueContext";

export const useProduct = (id) => {
  const { productId } = useAllValueContext();

  return useQuery({
    queryKey: ["product", productId, id],
    queryFn: async () => {
      const response = await getProductById(id);
      return response.success ? response.data : {};
    },
  });
};
