import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css";
import HomePage from "./pages/Home";
import CocktailPage from "./pages/SingleCocktail";

function App() {
  return (
    <div className="container mx-auto p-4 flex flex-col justify-center items-center ">
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/single-cocktail/:id" element={<CocktailPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
