import { useEffect, useState } from "react";
import Inputs from "./components/Inputs";
import Show from "./components/Show";

export default function App() {
  const [dishName, setDishName] = useState("");
  const [ingredName, setIngredName] = useState("");
  const [ingredQuantity, setIngredQuantity] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [stepCook, setStepCook] = useState("");
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");
  const [filtereddish, setFiltereddish] = useState([]);

  useEffect(() => {
    getLocalDishes();
  }, []);

  useEffect(() => {
    saveLocalDishes();
    filterHandler();
  }, [dishes, search]);

  const saveLocalDishes = () => {
    localStorage.setItem("dishes", JSON.stringify(dishes));
  };

  const getLocalDishes = () => {
    if (localStorage.getItem("dishes") === null) {
      localStorage.setItem("dishes", JSON.stringify([]));
    } else {
      let dishLocal = JSON.parse(localStorage.getItem("dishes"));
      setDishes(dishLocal);
    }
  };
  const filterHandler = () => {
    setFiltereddish(
      dishes.filter((dish) =>
        dish.ingName.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <Inputs
        dishName={dishName}
        setDishName={setDishName}
        ingredName={ingredName}
        setIngredName={setIngredName}
        ingredQuantity={ingredQuantity}
        setIngredQuantity={setIngredQuantity}
        stepCook={stepCook}
        setStepCook={setStepCook}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        dishes={dishes}
        setDishes={setDishes}
        setSearch={setSearch}
      />
      <Show
        dishName={dishName}
        ingredName={ingredName}
        ingredQuantity={ingredQuantity}
        imageUrl={imageUrl}
        stepCook={stepCook}
        dishes={dishes}
        setDishes={setDishes}
        filtereddish={filtereddish}
      />
    </div>
  );
}
