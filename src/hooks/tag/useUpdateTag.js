import { updateTag } from "@/utils/api/tag";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdateTag = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTag,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
  });
};

export default useUpdateTag;
