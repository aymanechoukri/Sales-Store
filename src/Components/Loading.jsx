export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent fixed inset-0 backdrop-blur-lg">
      <div className="text-center relative z-10">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-6">Loading...</h2>
        <p className="text-gray-600 mt-2">Please wait a moment</p>
      </div>
    </div>
  );
}
