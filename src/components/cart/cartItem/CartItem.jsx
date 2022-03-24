import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import useStyles from "./styles";

const CartItem = ({ lineItem, onRemoveFromCart, handleUpdateCartQty }) => {
  const classes = useStyles();
  if (!lineItem) return "loading...";
  return (
    <Card>
      <CardMedia
        image={lineItem.image.url}
        alt={lineItem.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{lineItem.name}</Typography>
        <Typography variant="h5">
          {lineItem.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            onClick={() =>
              handleUpdateCartQty(lineItem.id, lineItem.quantity - 1)
            }
            type="button"
            size="small"
          >
            -
          </Button>
          <Typography>{lineItem.quantity}</Typography>
          <Button
            onClick={() =>
              handleUpdateCartQty(lineItem.id, lineItem.quantity + 1)
            }
            type="button"
            size="small"
          >
            +
          </Button>
        </div>
        <Button
          onClick={() => onRemoveFromCart(lineItem.id)}
          variant="contained"
          type="button"
          color="secondary"
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
