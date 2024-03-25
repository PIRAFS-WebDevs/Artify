import { getPaymentByEmail } from "@/utils/api/payment";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../useAuthContext";

export const useGetPaymentByEmail = () => {
  const { user } = useAuthContext();

  return useQuery({
    queryKey: ["payment", user],
    queryFn: async () => {
      const response = await getPaymentByEmail(user?.email);
      return response.success ? response.data : [];
    },
  });
};
