import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";
import Container from "./Container";

function FoodApp() {
  let foodItems = ["dal", "Green Vegetable", "Roti", "Salad", "Milk", "Poha"];

  let textToShow = "Food Item Entered By User";

  const handleOnCHanged = (event) => {
    console.log(event.target.value);
    textToShow = event.target.value;
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food App</h1>

        <ul className="list-group">
          <FoodInput handleOnCHanged={handleOnCHanged} />
          <p>{textToShow}</p>
          <FoodItems foodItem={foodItems} />
        </ul>
      </Container>
      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container>
    </>
  );
}

export default FoodApp;
