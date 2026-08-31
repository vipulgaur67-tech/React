import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  // let foodItems = [];
  let foodItems = ["Daal", "Green Vegetable", "Roti", "Salad", "Milk", "ghee"];

  return (
    <React.Fragment>
      <h1>Healthy Foods</h1>
      <ErrorMessage></ErrorMessage>
      <FoodItems></FoodItems>
    </React.Fragment>
  );
}

export default App;
