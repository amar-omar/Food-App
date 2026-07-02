import sql from "better-sqlite3";
const dp = sql("meals.db");

export function getMealBySlug(slug) {
  return dp.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function getMeals() {
  return new Promise((resolve) => {
    try {
      const meals = dp.prepare("SELECT * FROM meals").all();
      console.log("Fetched meals:", meals);
      resolve(meals);
    } catch (error) {
      console.error("Error fetching meals:", error);
      resolve([]);
    }
  });
}
