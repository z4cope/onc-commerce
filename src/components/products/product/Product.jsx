import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";

import { AddShoppingCart } from "@material-ui/icons";
import UseStyles from "./styles";
import { commerceCartAction } from "../../../actions/commerceCartActions/commerceCartAction";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
  const [item, setItem] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(commerceCartAction());
  }, [dispatch]);

  const classes = UseStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image.url}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
        />
      </CardContent>
      <CardActions className={classes.cardActions} disableSpacing>
        <IconButton
          onClick={() => setItem(product.id)}
          aria-label="Add to cart"
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
