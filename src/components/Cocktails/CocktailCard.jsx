import React from "react";
import { Link } from "react-router-dom";

const CocktailCard = ({ cocktail }) => {
  return (
    <div className="bg-zinc-900 rounded shadow-md p-4 flex flex-col items-start justify-between">
      <div>
        <img src={cocktail.image} alt={cocktail.name} className="w-full h-64 object-cover mb-4" />
        <h2 className="text-2xl font-bold mb-2">{cocktail.name}</h2>
        <p className="text-lg text-white mb-4">{cocktail.description}</p>
      </div>
      {/* <ul>
        {cocktail.ingredients.map((ingredient, index) => (
          <li key={index} className="text-lg text-gray-600 mb-2">
            {ingredient}
          </li>
        ))}
      </ul> */}
      <Link to={`/single-cocktail/${cocktail.id}`}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
      </Link>
    </div>
  );
};

export default CocktailCard;
