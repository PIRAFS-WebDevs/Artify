import { saveLayout } from "@/utils/api/layout";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useAddLayout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: saveLayout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["layouts"] });
    },
  });
};

export default useAddLayout;
