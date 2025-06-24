export const AuthorProfileSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mb-8 bg-sky-100 rounded-xl py-8 lg:py-16 animate-pulse">
      <div className="w-32 h-32 rounded-full bg-gray-300" />
      <div className="flex flex-col items-center justify-center max-w-2xl text-center gap-2">
        <div className="h-6 w-48 bg-gray-300 rounded" />
        <div className="h-4 w-32 bg-gray-200 rounded" />
        <div className="h-4 w-64 bg-gray-200 rounded mt-2" />
      </div>
    </div>
  );
};
