import ErrorMessage from "./ErrorMessage";
import MyItem from "./MyItem";

function FoodItems(props) {
  // if (foodItem.length === 0) {
  //   return <h1>No item found</h1>;
  // }
  let emptyMessage =
    props.foodItem.length === 0 ? <h1>No item found</h1> : null;
  return (
    <>
      {/* {emptyMessage} */}
      {/*Working fine ingnore null. both method work fine above and below*/}
      {props.foodItem.length === 0 && <ErrorMessage message="No item found" />}
      {props.foodItem.map((item) => {
        return (
          <MyItem
            items={item}
            key={item}
            handleBuyButtonClicked={(e) => {
              console.log(e);
              console.log(`${item} being bought`);
            }}
          />
        );
      })}
    </>
  );
}

export default FoodItems;
