import { getAllPayment } from "@/utils/api/payment";
import { useQuery } from "@tanstack/react-query";

export const useAllPayment = () => {
  return useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const response = await getAllPayment();
      return response.success ? response.data : [];
    },
  });
};
