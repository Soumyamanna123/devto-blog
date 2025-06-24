export function PostCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-gray-300" />

      <div className="p-4 space-y-2">
        <div className="h-5 bg-gray-300 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />

        <div className="flex gap-2 mt-3">
          <span className="h-5 w-12 bg-gray-200 rounded" />
          <span className="h-5 w-14 bg-gray-200 rounded" />
          <span className="h-5 w-10 bg-gray-200 rounded" />
        </div>

        <div className="flex items-center gap-2 mt-4">
          <div className="w-6 h-6 bg-gray-300 rounded-full" />
          <div className="h-4 w-24 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}
