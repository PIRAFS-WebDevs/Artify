import {
  getAllRecommendation,
  postRecommended,
} from "@/utils/api/recommedation";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useAddRecommended = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postRecommended,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recommended"] });
    },
  });
};

export const useGetRecommended = () => {
  return useQuery({
    queryKey: ["recommended"],
    queryFn: () => getAllRecommendation(),
  });
};
