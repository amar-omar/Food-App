import Image from "next/image";
import EggDish from "../../../public/images/EggDish.jpg";
import Kitchen from "../../../public/images/Kitchen.jpg";
import Family from "../../../public/images/Family.jpg";
export default function CommunityPage() {
return (
  <>
    <div className="bg-gray-800 min-h-screen items-center flex flex-col text-white p-6 sm:p-12 md:p-20 lg:p-40 gap-6 sm:gap-8 md:gap-12 relative">
      {/* Hero Section */}
      <div className="text-center w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          One Shared Passion:
          <span className="block sm:inline bg-gradient-to-r from-amber-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Food
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mt-3 sm:mt-4">
          Join Our Community and Share Your Favorite Recipes!
        </p>
      </div>

      {/* Community Sections */}
      <div className="w-full flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
        {/* Community Perks Section */}
        <section className="flex flex-col items-center gap-8 sm:gap-12 w-full md:w-[90%] lg:w-[800px] py-8 sm:py-12 md:py-16 px-4 sm:px-8 bg-gray-700 rounded-2xl">
          <div className="text-center w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">
              Community Perks
            </h1>
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rotate-45 overflow-hidden border-4 border-amber-400/30 rounded-lg mx-auto mb-6 sm:mb-8">
              <Image
                src={EggDish}
                alt="Delicious egg dish"
                fill
                className="object-cover -rotate-45 scale-150"
              />
            </div>
            <p className="text-gray-300 px-4 sm:px-0 text-sm sm:text-base md:text-lg">
              Access exclusive recipes, cooking tips, and member-only events. Get early access to new features.
            </p>
          </div>
        </section>

        {/* Share & Discover Section */}
        <section className="flex flex-col items-center gap-8 sm:gap-12 w-full md:w-[90%] lg:w-[800px] py-8 sm:py-12 md:py-16 px-4 sm:px-8 bg-gray-700 rounded-2xl">
          <div className="text-center w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">
              Share & Discover Recipes
            </h1>
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rotate-45 overflow-hidden border-4 border-amber-400/30 rounded-lg mx-auto mb-6 sm:mb-8">
              <Image
                src={Kitchen}
                alt="Kitchen scene"
                fill
                className="object-cover -rotate-45 scale-150"
              />
            </div>
            <p className="text-gray-300 px-4 sm:px-0 text-sm sm:text-base md:text-lg">
              Upload your own creations and explore thousands of recipes from our global community.
            </p>
          </div>
        </section>

        {/* Friends Section */}
        <section className="flex flex-col items-center gap-8 sm:gap-12 w-full md:w-[90%] lg:w-[800px] py-8 sm:py-12 md:py-16 px-4 sm:px-8 bg-gray-700 rounded-2xl">
          <div className="text-center w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">
              Find New Friends & Like-minded People
            </h1>
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rotate-45 overflow-hidden border-4 border-amber-400/30 rounded-lg mx-auto mb-6 sm:mb-8">
              <Image
                src={Family}
                alt="Family cooking"
                fill
                className="object-cover -rotate-45 scale-150"
              />
            </div>
            <p className="text-gray-300 px-4 sm:px-0 text-sm sm:text-base md:text-lg">
              Connect with food enthusiasts worldwide. Join groups, participate in challenges, and make lasting friendships.
            </p>
          </div>
        </section>
      </div>
    </div>
  </>
);
}
