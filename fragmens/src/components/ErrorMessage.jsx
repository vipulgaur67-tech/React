const ErrorMessage = () => {
  let foodItems = ["Daal", "Green Vegetable", "Roti", "Salad", "Milk", "ghee"];

  return <>{foodItems.length === 0 && <h3>I am still hungry</h3>}</>;
};

export default ErrorMessage;
