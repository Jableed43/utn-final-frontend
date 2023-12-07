import loader from "../img/loader.gif";
import { useState, useEffect } from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";

const Meal = () => {
  const [url, setUrl] = useState(
    "https:/www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data.meals);
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);

  const setIndex = alpha => {
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };

  return (
    <>
      <h1 className="titulo">Api de comidas</h1>
      <div className="main">
        <div className="container">
          {show ? (
            <MealItem data={item} />
          ) : (
            <img className="loader-gif" src={loader} alt="loader" />
          )}
        </div>
        <div className="indexContainer">
          <RecipeIndex alphaIndex={alpha => setIndex(alpha)} />
        </div>
      </div>
    </>
  );
};

export default Meal;
