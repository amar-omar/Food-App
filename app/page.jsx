import Link from "next/link";
import SlideShow from "./Components/slider/SlideShow";

export default function Home() {
return (
  <>
    <div className="bg-gray-800 min-h-screen">
      {/* Header Section */}
      <header className="flex flex-col lg:flex-row gap-8 mx-auto w-full lg:w-[90%] items-center px-4 sm:px-8 md:px-12 lg:px-20 py-8 justify-start">
        <div className="w-full lg:w-[40rem] max-w-full">
          <SlideShow />
        </div>

        <div className="mx-0 lg:mx-4 w-full lg:w-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              NextLevel Food For <br /> NextLevel Foodies
            </h1>
            <p className="text-lg sm:text-xl font-light text-white my-6 sm:my-8 md:my-10">
              Taste & Share Food From All Over The World.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link 
              href="./Components/community" 
              className="text-amber-700 text-xl sm:text-2xl text-center sm:text-left"
            >
              Join The Community
            </Link>
            <Link 
              href="/meals" 
              className="px-6 py-2 rounded-xl text-lg sm:text-xl text-white bg-gradient-to-r from-amber-500 to-amber-700 text-center"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-8 mx-auto w-full lg:w-[90%] items-center px-4 sm:px-8 py-8 text-white">
        <section className="flex flex-col items-center gap-6 w-full max-w-4xl">
          <h1 className="font-bold text-3xl sm:text-4xl text-center">How It Works?</h1>
          <p className="text-center text-base sm:text-lg">
            NextLevel Food Is a Platform for Foodies to Share Their Favorite Meals, Recipes, and Cooking Tips with Each Other.
          </p>
          <p className="text-center text-base sm:text-lg">
            NextLevel Food is a community-driven platform that connects food enthusiasts from around the world. Whether you're a home cook, a professional chef.
          </p>
        </section>

        <section className="flex flex-col items-center gap-6 w-full max-w-4xl">
          <h2 className="font-bold text-3xl sm:text-4xl text-center">Why NextLevel Food?</h2>
          <p className="text-center text-base sm:text-lg">
            NextLevel Food is a community-driven platform that connects food enthusiasts from around the world.
          </p>
          <p className="text-center text-base sm:text-lg">
            Whether you're a home cook, a professional chef, or simply someone who loves to eat, NextLevel Food is the perfect place to share your passion for food.
          </p>
        </section>
      </main>
    </div>
  </>
);
}
