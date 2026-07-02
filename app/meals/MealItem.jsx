import Image from "next/image";
import Link from "next/link";


export default function MealItem({ title , image, summary, creator }) {

  return (
    <article className="relative h-[400px] w-full bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <header className="relative h-48 w-full">
        <Image 
        src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <p className="text-gray-200">By {creator}</p>
        </div>
      </header>
      <div className="p-4">
        <p className="text-gray-600 mb-4 line-clamp-3">{summary}</p>
        <div className="text-center">
          <Link 
            href="../meals/MealsItems.jsx"
            className="inline-block px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}