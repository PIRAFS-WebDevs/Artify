import { createPayment } from "@/utils/api/payment";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreatePayment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPayment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["payment"] });
    },
  });
};

export default useCreatePayment;
