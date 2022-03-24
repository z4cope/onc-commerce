//React stuff
import React from "react";
//Components
import Product from "./product/Product";
//Styles & MUI
import UseStyles from "./styles";
import { Grid } from "@material-ui/core";

const Products = ({ handleAddToCart, products }) => {
  const classes = UseStyles();

  if (!products.length) return "Loading...";

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
