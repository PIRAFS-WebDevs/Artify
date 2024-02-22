import { removeUser } from "@/utils/api/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useRemoveUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

export default useRemoveUser;
