'use client';

import { useAllItems } from "@/hooks/useCollectionDB";
import ItemsCard from "../cardComponent/ItemsCard";
import ItemsSkeleton from "@/shared/skeletons/ItemsSkeleton";
import { useRef } from "react";
import { gsap, useGSAP } from '@/lib/gsap';
import Container from "@/shared/Container";
export default function PopularPreview() {
  const container = useRef();
  const { items, isLoading } = useAllItems()
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
      <div className="flex justify-between items-end mb-12 group">
        <h2 className="text-2xl md:text-4xl font-bold">Trending Gear</h2>
        <a href="/items" className="text-blue-600 font-semibold duration-300 group-hover:translate-x-2">View All &rarr;</a>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading ? (
          [...Array(3)].map((_, index) => <ItemsSkeleton key={index} />)
        ) : (
          items.slice(0, 3)?.map(item => <div className="item-anim-card" key={item._id}>
            <ItemsCard item={item} />
          </div>)
        )}
      </div>
    </Container>
  );
}