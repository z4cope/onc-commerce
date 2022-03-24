//Global react import
import React from "react";
import { Link } from "react-router-dom";
//Components import
import CartItem from "./cartItem/CartItem";
//MUI & styles import
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";

const Cart = ({
  handleUpdateCartQty,
  onRemoveFromCart,
  handleEmptyCart,
  cart,
}) => {
  //Styles
  const classes = useStyles();

  //This block of code will run if the cart is empty
  const renderEmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link to="/" className={classes.link}>
        Start Adding Some
      </Link>
    </Typography>
  );

  //This block of code will run if the cart has products
  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem
              handleUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={onRemoveFromCart}
              lineItem={lineItem}
            ></CartItem>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty cart
          </Button>
          <Button
            className={classes.checkoutButton}
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  //Await the cart items to be rendered
  if (!cart.line_items) return "Loading...";

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;
