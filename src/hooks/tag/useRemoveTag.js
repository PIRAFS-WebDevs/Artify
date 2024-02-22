import { deleteTag } from "@/utils/api/tag";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useRemoveTag = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTag,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
  });
};

export default useRemoveTag;
