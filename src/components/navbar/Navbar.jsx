//General react imports
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
//MUI icons
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingBasket } from "@material-ui/icons";
//Assests
import logo from "../../assets/logo.png";
//Styles
import UseStyles from "./styles";

const Navbar = ({ totalItem }) => {
  const location = useLocation();
  const classes = UseStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Bonjour logo"
              height="25px"
              className={classes.image}
            />
            SoundShop
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            {location.pathname === "/" && (
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItem} color="secondary">
                  <ShoppingBasket />
                </Badge>
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
