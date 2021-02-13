import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    flexGrow: 1,
    marginRight: 5
  },
  media: {
    height: 140
  }
});

const Show = ({
  dishName,
  ingredName,
  ingredQuantity,
  imageUrl,
  dishes,
  setDishes,
  filtereddish,
  stepCook
}) => {
  const classes = useStyles();
  return (
    <Container sm={12} md={6} lg={4} xl={3} style={{ display: "flex" }}>
      {filtereddish.map((dish) => (
        <Card className={classes.root} key={dish.id}>
          <CardActionArea>
            <CardMedia className={classes.media} image={dish.iUrl} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {dish.dname}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {dish.ingName}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {dish.ingQnty}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {dish.iCook}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Container>
  );
};

export default Show;
