import Commerce from "@chec/commerce.js";

//This is a new instance from commerce api
export const commerce = new Commerce(
  process.env.REACT_APP_CHEC_PUBLIC_KEY,
  true
);
