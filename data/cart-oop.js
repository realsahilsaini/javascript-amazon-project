function Cart(localStorageKey){

const cart ={
  cartItems: undefined,

  // ---------------------------------------------------
  loadFromStorage(){
    this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)) 
  
  if (!this.cartItems) //if not cart items in local storage 
  {
    this.cartItems = [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1',
    },{
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2',
    }];
  }
  },
  // ---------------------------------------------------

   saveToStorage() {
    localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
  },
  // ---------------------------------------------------
  
   addToCart(productId) {
    let matchingItem;
  
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
  
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      this.cartItems.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId: '1',
      });
    }
  
    this.saveToStorage();
  },
  // ---------------------------------------------------

  removeFromCart(productId) {
    // const newCart = [];
    // cart.forEach((cartItem) => {
    //   if (productId !== cartItem.productId) {
    //     newCart.push(cartItem);
    //   }
    // });
    // cart = newCart;
  
  //another logic using splice method
    let matchingItemIndex;
    this.cartItems.forEach((cartItem, index) => {
      if (productId === cartItem.productId) {
        matchingItemIndex = index;
      }
    });
    this.cartItems.splice(matchingItemIndex, 1);
  
    this.saveToStorage();
  },
  // ---------------------------------------------------

  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;
  
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    }); 
  
    matchingItem.deliveryOptionId = deliveryOptionId;
  
    this.saveToStorage();
  }

};

return cart;
}
//What if the object name gets changed? Hence we use this keyword to refer to the object itself.

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');


cart.loadFromStorage();
cart.addToCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');

businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);