export default function MealsLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] sm:min-h-[300px] md:min-h-[400px] gap-4 p-8">
      {/* Animated spinner */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>

      <p className="text-3xl sm:text-4xl md:text-5xl font-medium text-center text-amber-700 animate-pulse">
        Fetching Delicious Meals...
      </p>
    </div>
  );
}
