import { deleteLayout } from "@/utils/api/layout";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useRemoveLayout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteLayout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["layouts"] });
    },
  });
};

export default useRemoveLayout;
