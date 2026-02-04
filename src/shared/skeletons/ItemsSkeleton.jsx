
export default function ItemsSkeleton() {
  return (
    <div className="card bg-gray-100 shadow-md border border-gray-200 overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="h-48 w-full bg-gray-300"></div>
      
      <div className="card-body p-5 space-y-3">
        {/* Title Skeleton */}
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        
        {/* Description Skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>
        
        {/* Bottom Skeleton */}
        <div className="flex justify-between items-center mt-4">
          <div className="h-8 bg-gray-300 rounded w-16"></div>
          <div className="h-8 bg-gray-300 rounded w-24"></div>
        </div>
      </div>
    </div>
  );
}