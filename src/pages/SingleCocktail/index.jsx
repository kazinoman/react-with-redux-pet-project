import React from "react";
import { useParams } from "react-router-dom";

const CocktailPage = () => {
  const { id } = useParams();

  const cocktail = {
    id: 1,
    name: "Old Fashioned",
    description: "A classic cocktail made with bourbon or rye whiskey, sugar, bitters, and a twist of citrus.",
    ingredients: ["bourbon or rye whiskey", "sugar", "bitters", "orange peel"],
    instructions: [
      "In a mixing glass, combine whiskey, sugar, and bitters.",
      "Fill the glass with ice and stir until chilled.",
      "Strain into a rocks glass and garnish with an orange peel.",
    ],
    image: "https://example.com/old-fashioned.jpg",
  };

  return (
    <div className="container mx-auto p-4 flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl font-bold mb-4">{id}</h1>
      <h1 className="text-5xl font-bold mb-4">{cocktail.name}</h1>
      <p className="text-lg text-gray-600 mb-8">{cocktail.description}</p>
      <img src={cocktail.image} alt={cocktail.name} className="w-full h-64 object-cover mb-8" />
      <h2 className="text-3xl font-bold mb-4">Ingredients:</h2>
      <ul className="list-disc list-inside mb-8">
        {cocktail.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-3xl font-bold mb-4">Instructions:</h2>
      <ol className="list-decimal list-inside mb-8">
        {cocktail.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default CocktailPage;
