"use client"; 

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-10 flex flex-col items-center justify-center min-h-screen bg-red-50">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Oops! Something went wrong while fetching posts.
      </h2>
      <p className="text-gray-500 mb-6">{error.message}</p>
      <button
        onClick={() => reset()} // Try to re-fetch the data
        className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Try Again
      </button>
    </div>
  );
}