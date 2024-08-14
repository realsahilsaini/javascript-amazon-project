import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";

//importing cart object from cart-oop.js (runs all the code inside this file, without importing anything)
// import  "../data/cart-class.js";
// import "../data/backend-practice.js"

loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
