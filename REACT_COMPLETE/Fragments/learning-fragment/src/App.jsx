import FoodItems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItems = ["Sabzi","Green Vegetables","Roti","Salad","Milk","Ghee"];

const handleOnChange = (event) =>{
  console.log(event.target.value);
};

  return (
    <>
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items ={foodItems}></ErrorMessage>
      <FoodInput handleOnChange={handleOnChange}></FoodInput>
      <FoodItems items ={foodItems}></FoodItems>
    </Container>

    {/* <Container>
      <p>Above is the list of healthy foods that are good for your health and well being</p>
    </Container> */}
    </>
  );
}  

export default App;
  // let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk", "ghee"];
  //1. IF-ELSE STATEMENT
  // if(foodItems.length === 0){
  //   return <h2>I am still hungry.</h2>
  // }
  //2. TERNARY OPERATOR
  //rather use ternary operator wala method cuz ye lagane se heading bhi hatt jayega
  //ternary operator(write after h1 tag): {foodItems.length ===0 ? <h3>I am still hungry.</h3>: null}
  //3. LOGICAL OPERATOR
  //we can also use logical operator : {foodItems.length ===0 && <h3>I am still hungry.</h3>}
      //<React.Fragment> can be used in place of this + import is also required but using <> we dont use them . Used bcoz - we can pass only one tag inside return in app.jsx file therefore we replaced <div> (earlier) with just <>