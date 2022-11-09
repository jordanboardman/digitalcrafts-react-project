import React from "react";
import { useDispatch, useSelector } from "react-redux";
import incrementCount from "../actions/incrementCount";
import decrementCount from "../actions/decrementCount";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import Button from "@mui/material/Button";

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
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          elevation={3}
          sx={{
            maxWidth: 445,
            justifyContent: "center",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="440"
              image={picture}
              alt="Current Cocktail"
            />
            <CardContent>
              <Typography
                sx={{ fontFamily: "luminari" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {name}
              </Typography>
              <Typography
                sx={{ fontFamily: "luminari" }}
                variant="body2"
                color="text.secondary"
              >
                {ingredients}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
      <br />

      <Container sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          elevation={3}
          sx={{ fontFamily: "luminari" }}
          variant="contained"
          onClick={() => dispatch(decrementCount(1))}
        >
          Previous
        </Button>

        <Button
          elevation={3}
          sx={{ fontFamily: "luminari" }}
          variant="contained"
          onClick={() => dispatch(incrementCount(1))}
        >
          Next
        </Button>
      </Container>
    </>
  );
};

export default Home;

// {/* <>
//       <ul>
//         <li>{name}</li>
//         <li>{ingredients}</li>
//         <img src={picture} />

//         {/* {items.map((item) => (
//         <li key={item.id}>{item.name}</li>
//       ))} */}
//       </ul>
// <button onClick={() => dispatch(decrementCount(1))}>Previous</button>
// <button onClick={() => dispatch(incrementCount(1))}>Next</button>
//     </> */}
