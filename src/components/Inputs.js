import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 300
    }
  }
}));

const Inputs = ({
  dishName,
  setDishName,
  ingredName,
  setIngredName,
  ingredQuantity,
  setIngredQuantity,
  imageUrl,
  setImageUrl,
  dishes,
  setDishes,
  setSearch,
  stepCook,
  setStepCook
}) => {
  const classes = useStyles();
  const submitHandler = (e) => {
    e.preventDefault();

    if (
      dishName === "" ||
      ingredName === "" ||
      ingredQuantity === "" ||
      imageUrl === "" ||
      stepCook === ""
    ) {
      return;
    }

    setDishes([
      ...dishes,
      {
        dname: dishName,
        ingName: ingredName,
        ingQnty: ingredQuantity,
        iUrl: imageUrl,
        iCook: stepCook,
        id: Math.random() * 1000
      }
    ]);
    setDishName("");
    setIngredName("");
    setIngredQuantity("");
    setImageUrl("");
    setStepCook("");
  };
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <form className={classes.root}>
          <div>
            <TextField
              label="Name of Dish"
              value={dishName}
              variant="outlined"
              onChange={(e) => setDishName(e.target.value)}
            />
            <TextField
              label="Ingredient Name"
              value={ingredName}
              variant="outlined"
              onChange={(e) => setIngredName(e.target.value)}
            />
          </div>
          <div>
            <TextField
              label="Ingredient Quantity"
              value={ingredQuantity}
              variant="outlined"
              onChange={(e) => setIngredQuantity(e.target.value)}
            />
            <TextField
              label="Step To Cook"
              value={stepCook}
              variant="outlined"
              onChange={(e) => setStepCook(e.target.value)}
            />
          </div>
          <div>
            <TextField
              label="Image Url"
              value={imageUrl}
              variant="outlined"
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={submitHandler}
            >
              Submit
            </Button>
          </div>
          <TextField
            label="Search ingredient"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </Container>
    </React.Fragment>
  );
};

export default Inputs;
