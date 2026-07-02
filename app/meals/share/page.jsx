import React from "react";
import ImagePicker from "./image-picker";
import ShareMeal from '@/lib/actions';
export default function ShareMealsPage() {


  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <header className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Share Your
          <span className="bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">
            Favorite Meal
          </span>
        </h1>
        <p className="text-lg text-gray-300">
          Or any other meal you feel needs sharing!
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-4 pb-12">
        <form className="space-y-6" action={ShareMeal}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                YOUR NAME
              </label>
              <input
                type="text"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                id="name"
                name="name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                YOUR EMAIL
              </label>
              <input
                type="email"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                id="email"
                name="email"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              TITLE
            </label>
            <input
              type="text"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              id="title"
              name="title"
              required
            />
          </div>

          <div>
            <label
              htmlFor="summary"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              SHORT SUMMARY
            </label>
            <input
              type="text"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              id="summary"
              name="summary"
              required
            />
          </div>

          <div>
            <label
              htmlFor="instructions"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              INSTRUCTIONS
            </label>
            <textarea
              name="instructions"
              id="instructions"
              rows={8}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Enter detailed instructions..."
              required
            />
          </div>

          <ImagePicker 
            label="MEAL IMAGE" 
            name="image" 
          />

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
            >
              Share Meal
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}