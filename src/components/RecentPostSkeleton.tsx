const RecentPostSkeleton = () => {
  return (
    <div className="relative bg-white shadow rounded-xl overflow-hidden animate-pulse h-[300px] sm:h-[400px]">
      {/* Image skeleton */}
      <div className="w-full h-full bg-gray-200" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent rounded"></div>

      {/* Title skeleton */}
      {/* <div className="absolute bottom-0 left-0 right-0 p-4 pb-8">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
      </div> */}
    </div>
  );
};

export default RecentPostSkeleton;
