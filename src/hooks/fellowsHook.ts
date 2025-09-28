/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import {
  addNewFellow,
  deleteSpecificFellow,
  getAllFellows,
  getSpecificFellow,
  updateSpecificFellow,
} from "../config/httpRequests/fellowsReq";

export const useFellows = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const toast = useToast();
  const { fellowId } = useParams();

  // Fellows Query
  const getFellows = useQuery({
    queryKey: ["fellows"],
    queryFn: getAllFellows,
  });

  // Specific Fellow query
  const getFellow = useQuery({
    queryKey: ["fellows", fellowId],
    queryFn: () => getSpecificFellow(fellowId as string),
    enabled: !!fellowId,
  });

  // createFellow Mutation
  const createFellowMutation = useMutation({
    mutationFn: addNewFellow,
    onSuccess: () => {
      // invalidate fellows list to refresh UI
      queryClient.invalidateQueries({ queryKey: ["fellows"] });

      navigate("/user/fellows");
    },
    onError: (error: any) => {
      console.error("Can't create fellow", error.message);
      toast({
        title: "Error",
        description: error.response?.data?.message || error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });

  // update fellow mutation
  const updateFellowMutation = useMutation({
    mutationFn: ({ fellowId, values }: { fellowId: string; values: any }) =>
      updateSpecificFellow(fellowId, values),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["fellows"] });
      queryClient.invalidateQueries({
        queryKey: ["fellows", variables.fellowId],
      });
      // return to fellow details page
      navigate(-1);
    },
    onError: (error: any) => {
      console.error("Can't update fellow", error.message);
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
  const deleteFellowMutation = useMutation({
    mutationFn: (fellowId: string) => deleteSpecificFellow(fellowId),
    onSuccess: (_, fellowId) => {
      queryClient.invalidateQueries({ queryKey: ["fellows"] });
      queryClient.removeQueries({ queryKey: ["fellows", fellowId] });
      navigate("/user/fellows");

      // notify user
      toast({
        title: "Fellow deleted Successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
    onError: (error: any) => {
      console.error("Can't delete fellow", error.message);
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
    // create fellow
    createFellow: createFellowMutation.mutate,
    isCreatingFellow: createFellowMutation.isPending,
    isCreatingFellowError: createFellowMutation.isError,
    CreatingFellowError: createFellowMutation.error,

    // Fellows data
    fellowsList: getFellows.data,
    isLoadingFellows: getFellows.isLoading,
    isFellowsError: getFellows.isError,
    fellowsError: getFellows.error,

    // Specific fellow data
    fellow: getFellow.data,
    isLoadingFellow: getFellow.isLoading,
    isFellowError: getFellow.isError,
    fellowError: getFellow.error,

    // update mutation
    updateFellow: updateFellowMutation.mutate,
    isUpdatingFellow: updateFellowMutation.isPending,
    isUpdatingFellowError: updateFellowMutation.isError,
    UpdatingFellowError: updateFellowMutation.error,

    // delete mutation
    deleteFellow: deleteFellowMutation.mutate,
    isDeletingFellow: deleteFellowMutation.isPending,
    isDeletingFellowError: deleteFellowMutation.isError,
    DeletingFellowError: deleteFellowMutation.error,
  };
};
