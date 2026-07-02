import Link from "next/link";
import { Suspense } from "react";
import MealsGrid from "./MealsGrid";
import {getMeals} from "@/initdp";
import MealsLoading from "./loading";

async function Meals() {
  const meals = await getMeals();

  console.log("Fetched Meals:", meals);
  
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
 return (
  <>
    <header className="bg-gray-800 text-white p-6 sm:p-8 md:p-12 lg:p-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
          Delicious Meals, Created <span className="bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">By You</span>
        </h1>
        <p className="py-3 sm:py-4 md:py-6 lg:py-8 text-base sm:text-lg md:text-xl">
          Choose Your Favorite recipe and cook it Yourself, it is easy and fun!
        </p>
        <Link 
          href="/meals/share" 
          className="inline-block px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg sm:rounded-xl text-base sm:text-lg md:text-xl text-white bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 transition-colors duration-300"
        >
          Share Your Favorite Recipe
        </Link>
      </div>
    </header>
    <main className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
      <Suspense fallback={<MealsLoading />}>
        <Meals />
      </Suspense>
    </main>
  </>
);
}