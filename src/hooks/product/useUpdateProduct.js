import { updateRatings } from "@/utils/api/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdateProduct = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateRatings,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product", id] });
    },
  });
};

export default useUpdateProduct;
