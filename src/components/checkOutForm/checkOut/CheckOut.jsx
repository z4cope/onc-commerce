//General react imports
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//Components
import Address from "../AdressForm";
import Payment from "../PaymentForm";
//API
import { commerce } from "../../../lib/commerce";
//Styles
import useStyles from "./styles";
//MUI
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";

//Payment Steps
const steps = ["Shipping address", "Payment details"];

//Main components
const CheckOut = ({ cart }) => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: "cart",
          });

          setCheckoutToken(token);
        } catch {
          if (activeStep !== steps.length) navigate.push("/");
        }
      };

      generateToken();
    }
  }, [cart]);

  const next = (data) => {
    setShippingData(data);

    nextStep();
  };

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const PaymentOption = () =>
    activeStep === 0 ? (
      <Address next={next} checkoutToken={checkoutToken} />
    ) : (
      <Payment shippingData={shippingData} />
    );
  const Comfirmation = () => {
    return <div>Confirmation</div>;
  };
  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Comfirmation />
          ) : (
            checkoutToken && <PaymentOption />
          )}
        </Paper>
      </main>
    </>
  );
};

export default CheckOut;
