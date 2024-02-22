import { deleteCategory } from "@/utils/api/category";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useRemoveCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};

export default useRemoveCategory;
