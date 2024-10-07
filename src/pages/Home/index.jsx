import React from "react";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col justify-center items-center ">
      <h1 className="text-5xl font-bold mb-4">Welcome to our website!</h1>
      <p className="text-lg text-gray-600 mb-8">This is a simple home page.</p>
      <button className="bg-blue-500 hover:bg-blue-700 ext-white font-bold py-2 px-4 rounded">Learn More</button>
    </div>
  );
};

export default HomePage;
