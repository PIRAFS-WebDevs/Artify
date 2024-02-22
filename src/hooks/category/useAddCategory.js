import { saveCategory } from "@/utils/api/category";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useAddCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: saveCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};

export default useAddCategory;
