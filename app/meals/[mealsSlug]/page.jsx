import { getMeals } from "@/lib/meals";
import Image from "next/image";
import React from "react";
export default async function MealsDetailsPage({ params }) {
  const meals = await getMeals();
  return (
    <div className="bg-gray-900 text-white px-4 py-6 sm:px-8 sm:py-10">
      <header className="max-w-6xl mx-auto">
        {meals.length > 0 &&
          meals.map((meal) => (
            <div
              key={meal.id}
              className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start"
            >
              <div className="w-full h-6 lg:hidden"></div>

              <div className="w-full lg:w-1/2 space-y-8">
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={meal.image}
                    alt={meal.title}
                    width={800}
                    height={600}
                    className="w-full h-64 sm:h-80 md:h-96 object-cover"
                    priority
                  />
                </div>

                <div className="text-center text-gray-400 text-sm">
                  {meal.image_caption}
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {meal.title}
                  </h1>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-300">
                    <span className="text-lg sm:text-xl font-medium">by</span>
                    <p
                      className="text-lg sm:text-xl font-medium bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent transition-all duration-200 hover:brightness-110"
                      href={meal.creator_email}
                    >
                      {meal.creator}
                    </p>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  {meal.summary}
                </p>

              </div>

              <div className="w-full h-6 lg:hidden"></div>
            </div>
          ))}
      </header>

      <main className="max-w-6xl mx-auto mt-12 p-6 sm:p-8 bg-gray-800 rounded-xl shadow-md">
      </main>
    </div>
  );
}
