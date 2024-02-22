import { updateCategory } from "@/utils/api/category";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};

export default useUpdateCategory;
