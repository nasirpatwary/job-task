"use client"
import { createItemsAction, getSingleItemsAction } from "@/actions/server/server";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

export const useAllItems = () => {
    const {data: items=[], isLoading, isError} = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const { data } = await axios.get("/api/items");
      return data.items;
    },
  });
  return {items, isLoading, isError}
};



export const useSingleItem = (itemId) => {
    const { data: singleItem, isLoading } = useQuery({
        queryKey: ['item', itemId],
        queryFn: () => getSingleItemsAction(itemId),
        enabled: !!itemId 
    });
    return {singleItem, isLoading}
}


export const usecreateItemsAction  = () =>{
    const queryClient = useQueryClient();
    const mutation = useMutation({
    mutationFn: createItemsAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] });
      toast.success("Items added successfully!");
    },
    onError: error => toast.error(error.message)
  });
  return mutation
}