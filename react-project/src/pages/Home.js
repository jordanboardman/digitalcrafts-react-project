import React from "react";
import { useDispatch, useSelector } from "react-redux";
import incrementCount from "../actions/incrementCount";
import decrementCount from "../actions/decrementCount";
import { useState, useEffect } from "react";

const Home = () => {
  // const [products, setProducts] = useState("placeholder");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [picture, setPicture] = useState("");
  const dispatch = useDispatch();

  const count = useSelector((state) => state.count); //this count is mapped from the global state
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(async () => {
    await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${count}`
    )
      .then((result) => {
        // console.log(result.json());
        // setIsLoaded(true);
        // setItems(result);
        return result.json();
      })
      .then((response) => {
        console.log(response);
        setName(response.drinks[0].strDrink);
        setIngredients(response.drinks[0].strInstructions);
        setPicture(response.drinks[0].strDrinkThumb);
      });
  }, [{ count }]);
  console.log(name);

  return (
    <>
      <ul>
        <li>{name}</li>
        <li>{ingredients}</li>
        <img src={picture} />

        {/* {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))} */}
      </ul>
      <button onClick={() => dispatch(decrementCount(1))}>Previous</button>
      <button onClick={() => dispatch(incrementCount(1))}>Next</button>
    </>
  );
};

export default Home;
