//General react imports
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components imports
import { Navbar, Products, Cart, CheckOut } from "./components";
import FilterBar from "./components/filterBar/filterBar";
//API instense
import { commerce } from "./lib/commerce";

function App() {
  //A state that stores the added product to the cart
  const [products, setProducts] = useState([]);
  //A state that stores all the cart items
  const [cart, setCart] = useState({});

  //Fetching the cart to dsiplay all the products in the DB
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  //Filter products
  const filterProducts = async (chosenCat) => {
    const { data } = await commerce.products.list({
      category_slug: [chosenCat],
    });
    setProducts(data);
  };

  //Fetching the cart retrive method
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  //Fetching the add to cart method from
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  /*Fetching the update cart when adding or removing a product method */
  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  //Fetching the product deletion method
  const onRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  //Fetching all the products deletion from cart method
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  //Keeps the adding function watches the changes
  useEffect(() => {
    fetchCart();
    fetchProducts();
  }, []);

  return (
    <div>
      <Router>
        <Navbar totalItem={cart.total_items} />
        <FilterBar filterProducts={filterProducts} />
        <Routes>
          <Route
            path="/"
            element={
              <Products products={products} handleAddToCart={handleAddToCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                handleUpdateCartQty={handleUpdateCartQty}
                onRemoveFromCart={onRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
                cart={cart}
              />
            }
          />
          <Route path="/checkout" element={<CheckOut cart={cart} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
