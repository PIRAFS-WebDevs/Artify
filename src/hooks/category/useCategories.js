import { getCategories } from "@/utils/api/category";
import { useQuery } from "@tanstack/react-query";

export const useCategories = () => {
  const {
    data: categories = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  return { categories, isLoading, isError };
};
