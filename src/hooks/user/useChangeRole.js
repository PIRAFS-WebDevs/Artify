import { changeUserRole } from "@/utils/api/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useChangeRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: changeUserRole,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

export default useChangeRole;
