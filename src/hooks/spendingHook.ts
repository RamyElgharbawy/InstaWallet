/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import {
  addNewSpending,
  deleteSpecificSpending,
  getAllSpending,
  getSpecificSpending,
  updateSpecificSpending,
} from "../config/httpRequests/spendingReq";

export const useSpendings = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const toast = useToast();
  const { spendingId } = useParams();

  // Spending list Query
  const getSpendingList = useQuery({
    queryKey: ["spendings"],
    queryFn: getAllSpending,
  });

  // Specific Spending query
  const getSpending = useQuery({
    queryKey: ["spendings", spendingId],
    queryFn: () => getSpecificSpending(spendingId as string),
    enabled: !!spendingId,
  });

  // create Spending Mutation
  const createSpendingMutation = useMutation({
    mutationFn: addNewSpending,
    onSuccess: () => {
      // invalidate spendings list to refresh UI
      queryClient.invalidateQueries({ queryKey: ["spendings"] });

      navigate("/user/spendings");
    },
    onError: (error: any) => {
      console.error("Can't create spending", error.message);
      toast({
        title: "Error",
        description: error.response?.data?.message || error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });

  // update spending mutation
  const updateSpendingMutation = useMutation({
    mutationFn: ({ spendingId, values }: { spendingId: string; values: any }) =>
      updateSpecificSpending(spendingId, values),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["spendings"] });
      queryClient.invalidateQueries({
        queryKey: ["spendings", variables.spendingId],
      });
      // return to spending details page
      navigate(-1);
    },
    onError: (error: any) => {
      console.error("Can't update spending", error.message);
      toast({
        title: "Error",
        description: error.response?.data?.message || error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });

  // delete mutation
  const deleteSpendingMutation = useMutation({
    mutationFn: (spendingId: string) => deleteSpecificSpending(spendingId),
    onSuccess: (_, spendingId) => {
      queryClient.invalidateQueries({ queryKey: ["spendings"] });
      queryClient.removeQueries({ queryKey: ["spendings", spendingId] });
      navigate("/user/spendings");

      // notify user
      toast({
        title: "Spending deleted Successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
    onError: (error: any) => {
      console.error("Can't delete spending", error.message);
      toast({
        title: "Error",
        description: error.response?.data?.message || error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });

  return {
    // create spending
    createSpending: createSpendingMutation.mutate,
    isCreatingSpending: createSpendingMutation.isPending,
    isCreatingSpendingError: createSpendingMutation.isError,
    CreatingSpendingError: createSpendingMutation.error,

    // Spending list
    spendingsList: getSpendingList.data,
    isLoadingSpendings: getSpendingList.isLoading,
    isSpendingsError: getSpendingList.isError,
    spendingsError: getSpendingList.error,

    // Specific spending data
    spending: getSpending.data,
    isLoadingSpending: getSpending.isLoading,
    isSpendingError: getSpending.isError,
    spendingError: getSpending.error,

    // update mutation
    updateSpending: updateSpendingMutation.mutate,
    isUpdatingSpending: updateSpendingMutation.isPending,
    isUpdatingSpendingError: updateSpendingMutation.isError,
    UpdatingSpendingError: updateSpendingMutation.error,

    // delete mutation
    deleteSpending: deleteSpendingMutation.mutate,
    isDeletingSpending: deleteSpendingMutation.isPending,
    isDeletingSpendingError: deleteSpendingMutation.isError,
    DeletingSpendingError: deleteSpendingMutation.error,
  };
};
