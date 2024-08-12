import {addToCart, cart, loadFromStorage} from '../../data/cart.js';

describe('test suite: addToCart', ()=>{

  it('adds a new item to the cart', ()=>{

    //We don't wanna actually save to local storage, hence we mock the function
    spyOn(localStorage, 'setItem');

    //mocking the cart to return []
    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify([]);
    });
    loadFromStorage();


    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart[0].quantity).toEqual(1);
  });

  it('increments the quantity of an existing item in the cart', ()=>{

     //We don't wanna actually save to local storage, hence we mock the function
     spyOn(localStorage, 'setItem');

    //mocking the cart to return []
    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1',
      }]);
    });
    loadFromStorage();

    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart[0].quantity).toEqual(2);

  });

});