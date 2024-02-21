import { saveProduct } from "@/utils/api/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: saveProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export default useAddProduct;
