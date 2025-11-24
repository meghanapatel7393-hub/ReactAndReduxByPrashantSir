import FoodItems from "./components/FoodItems";

function FoodApp() {
  let foodItems = ["dal", "Green Vegetable", "Roti", "Salad", "Milk", "Poha"];
  return (
    <>
      <h1 className="food-heading">Healthy Food App</h1>
      <ul className="list-group">
        <FoodItems foodItem={foodItems} />
      </ul>
    </>
  );
}

export default FoodApp;
