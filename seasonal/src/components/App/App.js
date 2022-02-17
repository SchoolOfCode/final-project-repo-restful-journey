import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "../Homepage/Homepage.js";
import IngredientPage from "../IngredientPage/IngredientPage.js";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <nav>
        <Link to="/ingredients">Ingredients Page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="ingredients" element={<IngredientPage />} />
      </Routes>
    </div>
  );
}

export default App;
