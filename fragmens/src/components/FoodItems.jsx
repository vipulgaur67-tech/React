import Item from "./Items";

const FoodItems = () => {
  let foodItems = ["Daal", "Green Vegetable", "Roti", "Salad", "Milk", "ghee"];

  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <item key={item} foodItems={item}></item>
      ))}
    </ul>
  );
};
export default FoodItems;
