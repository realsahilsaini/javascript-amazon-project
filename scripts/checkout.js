import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";

//importing cart object from cart-oop.js (runs all the code inside this file, without importing anything)
// import  "../data/cart-class.js";
// import "../data/backend-practice.js"


// loadProducts(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });



//Promise Practice 
//Create new promise object
// new Promise((resolve)=>{
//   loadProducts(()=>{
//     resolve("value1");
//   });

// }).then((value)=>{
//   console.log(value);
//   return new Promise((resolve)=>{
//     loadCart(()=>{
//       resolve();
//     });
//   });
  
// }).then(()=>{
//   renderOrderSummary();
//   renderPaymentSummary();
// });


//Same as above but using Promise.all
Promise.all([
  new Promise((resolve)=>{
    loadProducts(()=>{
      resolve("value1");
    });
  
  }),

  new Promise((resolve)=>{
    loadCart(()=>{
      resolve("value2");
    });
  })
]).then((values)=>{
  console.log(values);
  renderOrderSummary(); 
  renderPaymentSummary();
});


// callback problem demonstration 
// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });


