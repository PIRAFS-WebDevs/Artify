import { getTagById } from "@/utils/api/tag";
import { useQuery } from "@tanstack/react-query";

export const useTag = (id) => {
  return useQuery({
    queryKey: ["tag"],
    queryFn: async () => {
      const response = await getTagById(id);
      return response.success ? response.data : {};
    },
  });
};
