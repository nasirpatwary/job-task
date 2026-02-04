"use client"
import { useAllItems } from "@/hooks/useCollectionDB";
import Container from "@/shared/Container";

import React from "react";

const ItemPage = () => {
   const {items, isLoading, isError} = useAllItems()
  console.log(items);
  
  return (
    <Container className="grid grid-cols-1 md:grid-cols-3 gap-6">
      Items Page
    </Container>
  );
};

export default ItemPage;
