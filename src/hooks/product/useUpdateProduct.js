import { updateProduct } from "@/utils/api/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export default useUpdateProduct;
