import { removeProduct } from "@/utils/api/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useRemoveProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export default useRemoveProduct;
