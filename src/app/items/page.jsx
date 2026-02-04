"use client"
import ItemsCard from "@/components/cardComponent/ItemsCard";
import { useAllItems } from "@/hooks/useCollectionDB";
import Container from "@/shared/Container";
import ItemsSkeleton from "@/shared/skeletons/ItemsSkeleton";

const ItemPage = () => {
  const { items, isLoading, isError } = useAllItems();
  console.log(items);
  
  if (isError) return <div className="text-center text-red-500">Error loading data!</div>;

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-8">Our Items</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading
          ?
            [...Array(12)].map((_, index) => <ItemsSkeleton key={index} />)
          : 
            items.map((item) => <ItemsCard key={item._id} item={item} />)}
      </div>
    </Container>
  )
};

export default ItemPage;
