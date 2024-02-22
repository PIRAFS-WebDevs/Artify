import { updateLayout } from "@/utils/api/layout";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdateLayout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateLayout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["layouts"] });
    },
  });
};

export default useUpdateLayout;
