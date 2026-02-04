import React from "react";

const DetailSkeleton = () => {
  return <div className="grid md:grid-cols-2 gap-10 py-10 animate-pulse">
        {/* Image Skeleton */}
        <div className="h-[400px] bg-gray-200 rounded-xl shadow-sm"></div>

        {/* Info Skeleton */}
        <div className="space-y-6 py-4">
          {/* Category Badge */}
          <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
          
          {/* Title */}
          <div className="h-10 w-3/4 bg-gray-200 rounded"></div>
          
          {/* Price */}
          <div className="h-8 w-1/4 bg-gray-200 rounded"></div>
          
          <div className="divider opacity-10"></div>
          
          {/* Description Lines */}
          <div className="space-y-3">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
          </div>
          
          {/* Button */}
          <div className="h-12 w-full md:w-40 bg-gray-200 rounded"></div>
        </div>
      </div>
};

export default DetailSkeleton;
