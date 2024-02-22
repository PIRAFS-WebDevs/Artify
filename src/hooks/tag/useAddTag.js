import { saveTag } from "@/utils/api/tag";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useAddTag = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: saveTag,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
  });
};

export default useAddTag;
