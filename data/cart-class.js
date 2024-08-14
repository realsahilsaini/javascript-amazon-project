//Class is basically a object generator 

//Benefits of using class
// 1. It is a blueprint for creating objects
// 2. Extra features like constructor, inheritance, etc

class Cart{
  //public property
  cartItems; //undefined
  //private property
  #localStorageKey; //undefined
 
  //Works like normal method.
  //When we generate the object of the class, this method will run.
  //Constructor let's  us put this setup code inside the class.
  //Constructor is a special method that runs when we create a new instance of the class
  //Rule: 
  // 1. Has to be named constructor
  // 2. Should not return anything
  constructor(localStorageKey){
    this.#localStorageKey = localStorageKey;    
    this.#loadFromStorage();
  }

  //here making the method private since load may not be needed to be called from outside
  #loadFromStorage(){
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)) 
  
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
  }

  saveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  }

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
  }

  removeFromCart(productId) {
    let matchingItemIndex;
    this.cartItems.forEach((cartItem, index) => {
      if (productId === cartItem.productId) {
        matchingItemIndex = index;
      }
    });
    this.cartItems.splice(matchingItemIndex, 1);
  
    this.saveToStorage();
  }

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

}



//here we are creating two instances of the cart class
  const cart = new Cart('cart-oop');
  const businessCart = new Cart('cart-business');

  //setup code for the instances

  //We can also put this log's in the constructor method of the class by adding console.log(this)
  console.log(cart);
  console.log(businessCart);

  // To avoid changing the property/method private, hence we make it private
  // cart.#loadFromStorageKey = 'aaa';



//Here we are checking if the instances are of the class Cart
// console.log(  cart instanceof Cart);//true
// console.log(  businessCart instanceof Cart);//true


