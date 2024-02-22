import { getTags } from "@/utils/api/tag";
import { useQuery } from "@tanstack/react-query";

export const useTags = () => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      const response = await getTags();
      return response.success ? response.data : [];
    },
  });
};
