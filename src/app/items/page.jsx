"use client"
import ItemsCard from "@/components/cardComponent/ItemsCard";
import { useAllItems } from "@/hooks/useCollectionDB";
import Container from "@/shared/Container";
import ItemsSkeleton from "@/shared/skeletons/ItemsSkeleton";
import { useRef } from "react";
import { gsap, useGSAP } from '@/lib/gsap';
const ItemPage = () => {
  const container = useRef();
  const { items, isLoading, isError } = useAllItems();
  
  if (isError) return <div className="text-center text-red-500">Error loading data!</div>;
  
   useGSAP(() => {
    if (!isLoading && items?.length > 0) {
      gsap.from('.item-anim-card', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        scale: 0.9,
        stagger: 0.15, 
        duration: 0.8,
        ease: 'back.out(1.7)', 
      });
    }
  }, { scope: container, dependencies: [isLoading] });
  return (
    <Container ref={container} className="py-10">
      <div className="mb-12 space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight">Our Collection</h1>
          <p className="text-zinc-500 mt-2">Discover the future of digital assets.</p>
        </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading
          ?
            [...Array(12)].map((_, index) => <ItemsSkeleton key={index} />)
          : 
            items.map((item) => <div className="item-anim-card" key={item._id}>
              <ItemsCard item={item} />
            </div>)}
      </div>
    </Container>
  )
};

export default ItemPage;
