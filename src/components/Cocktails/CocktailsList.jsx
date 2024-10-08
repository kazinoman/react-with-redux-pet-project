import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchCocktails } from "../../redux/slices/cocktailSlice";
import CocktailCard from "./CocktailCard";
import { useState } from "react";

const CocktailsList = () => {
  const [modifiedCocktails, setModifiedCocktails] = useState([]);

  const { loading, error, cocktails } = useSelector((state) => state.cocktails);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCocktails());
  }, [dispatch]);

  React.useEffect(() => {
    if (cocktails) {
      const newCocktailsDetails = cocktails?.map((cocktail) => {
        const { idDrink, srtDrink, strDrink, strDrinkThumb, strInstructions } = cocktail;
        return {
          id: idDrink,
          name: strDrink,
          description: strInstructions,
          image: strDrinkThumb,
        };
      });

      setModifiedCocktails(newCocktailsDetails);
    }
  }, [cocktails]);

  if (loading) {
    return <h1>Loading.....</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="min-w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
      {modifiedCocktails?.map((cocktail, index) => (
        <CocktailCard key={index} cocktail={cocktail} />
      ))}
    </div>
  );
};

export default CocktailsList;
