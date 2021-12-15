//React stuff
import React, { useEffect } from "react";
//Components
import Product from "./product/Product";
//Styles & MUI
import UseStyles from "./styles";
import { Grid } from "@material-ui/core";
//Redux
import { commerceAction } from "../../actions/commerceActions/commerceAction";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(commerceAction());
  }, [dispatch]);
  const { productsList } = useSelector((state) => state);
  const classes = UseStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {productsList.products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
