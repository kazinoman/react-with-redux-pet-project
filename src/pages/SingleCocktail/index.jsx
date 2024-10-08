import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCocktail } from "../../redux/slices/cocktailSlice";

const CocktailPage = () => {
  const { id } = useParams();
  const { cocktail, loading, error } = useSelector((state) => state.cocktails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktail(id));
  }, [dispatch, id]);

  if (loading) {
    return <h1>Loading.....</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="container mx-auto p-4 flex flex-col justify-center items-center h-screen">
      <img src={cocktail.strDrinkThumb} alt={cocktail.name} className="w-full h-64 object-cover mb-8" />
      <h1 className="text-5xl font-bold mb-4">{id}</h1>
      <h1 className="text-5xl font-bold mb-4">{cocktail?.strDrink}</h1>
      <p className="text-lg text-gray-600 mb-8">{cocktail.strInstructions}</p>
    </div>
  );
};

export default CocktailPage;
