import {renderOrderSummary} from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import  "../data/cart-oop.js"; 
//importing cart object from cart-oop.js (runs all the code inside this file, without importing anything)

renderOrderSummary();
renderPaymentSummary();