// app/server-fetch/loading.tsx
export default function Loading() {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      {/* Heading with pulse animation */}
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-300 animate-pulse">
        Fetching Data from Server...
      </h1>

      {/* 6 Skeleton Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div 
            key={item} 
            className="h-40 bg-gray-200 rounded-xl animate-pulse border border-gray-100"
          >
            {/* Ye empty box skeleton ki tarah dikhega */}
          </div>
        ))}
      </div>
    </div>
  );
}