import { getProducts } from "@/utils/api/product";
import { useQuery } from "@tanstack/react-query";
import { useAllValueContext } from "../useAllValueContext";

export const useProducts = () => {
  const { searchValue } = useAllValueContext();

  return useQuery({
    queryKey: ["products", searchValue],
    queryFn: async () => {
      const response = await getProducts(`${searchValue}`);
      return response.success ? response.data : [];
    },
  });
};
