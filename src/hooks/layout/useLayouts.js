import { getLayouts } from "@/utils/api/layout";
import { useQuery } from "@tanstack/react-query";

export const useLayouts = () => {
  return useQuery({
    queryKey: ["layouts"],
    queryFn: async () => {
      const response = await getLayouts();
      return response.success ? response.data : [];
    },
  });
};
