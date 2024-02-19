import { getProducts } from "@/utils/api/product";
import { useQuery } from "@tanstack/react-query";
import { useAllValueContext } from "../useAllValueContext";

export const useProducts = () => {
  const { searchValue } = useAllValueContext();

  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", searchValue],
    queryFn: () => getProducts(`${searchValue}`),
  });

  return { products, isLoading, isError };
};
