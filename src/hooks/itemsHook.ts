/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addNewItem,
  deleteSpecificItem,
  getAllItems,
  getSpecificItem,
  updateSpecificItem,
} from "../config/httpReqUtils";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

export const useItems = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const toast = useToast();
  const { itemId } = useParams();

  // Items Query
  const getItems = useQuery({
    queryKey: ["items"],
    queryFn: getAllItems,
  });

  // Specific Item query
  const getItem = useQuery({
    queryKey: ["items", itemId],
    queryFn: () => getSpecificItem(itemId),
    enabled: !!itemId,
  });

  // createItem Mutation
  const createItemMutation = useMutation({
    mutationFn: addNewItem,
    onSuccess: () => {
      // invalidate items list to refresh UI
      queryClient.invalidateQueries({ queryKey: ["items"] });

      navigate("/user/items");
    },
    onError: (error: any) => {
      console.error("Can't create item", error.message);
      toast({
        title: "Error",
        description: error.response?.data?.message || error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });

  // update item mutation
  const updateItemMutation = useMutation({
    mutationFn: ({ itemId, values }: { itemId: string; values: any }) =>
      updateSpecificItem(itemId, values),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
      queryClient.invalidateQueries({ queryKey: ["items", variables.itemId] });
      // return to item details page
      navigate(-1);
    },
    onError: (error: any) => {
      console.error("Can't update item", error.message);
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
  const deleteItemMutation = useMutation({
    mutationFn: (itemId: string) => deleteSpecificItem(itemId),
    onSuccess: (_, itemId) => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
      queryClient.removeQueries({ queryKey: ["items", itemId] });
      navigate("/user/items");

      // notify user
      toast({
        title: "Item deleted Successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
    onError: (error: any) => {
      console.error("Can't delete item", error.message);
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
    // create item
    createItem: createItemMutation.mutate,
    isCreating: createItemMutation.isPending,
    isCreatingError: createItemMutation.isError,
    CreatingError: createItemMutation.error,

    // Items data
    itemsList: getItems.data,
    isLoadingItems: getItems.isLoading,
    isItemsError: getItems.isError,
    itemsError: getItems.error,

    // Specific item data
    item: getItem.data,
    isLoadingItem: getItem.isLoading,
    isItemError: getItem.isError,
    itemError: getItem.error,

    // update mutation
    updateItem: updateItemMutation.mutate,
    isUpdating: updateItemMutation.isPending,
    isUpdatingError: updateItemMutation.isError,
    UpdatingError: updateItemMutation.error,

    // delete mutation
    deleteItem: deleteItemMutation.mutate,
    isDeleting: deleteItemMutation.isPending,
    isDeletingError: deleteItemMutation.isError,
    DeletingError: deleteItemMutation.error,
  };
};
