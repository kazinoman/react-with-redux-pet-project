import React from "react";
import { useState } from "react";
import CocktailsList from "../../components/Cocktails/CocktailsList";

const HomePage = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the search term

    console.log(search);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col justify-center items-center ">
      <form onSubmit={handleSubmit} className="flex flex-row items-center justify-center">
        <input
          placeholder="Search your favorite cocktail"
          className="text-xl font-bold  text-black p-4 w-full"
          onChange={handleSearch}
        />

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-[61px]">
          Search
        </button>
      </form>

      <div className="mt-5">
        <CocktailsList />
      </div>
    </div>
  );
};

export default HomePage;
