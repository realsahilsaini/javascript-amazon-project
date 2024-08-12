 import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
 import {loadFromStorage, cart} from '../../data/cart.js';


 describe("renderOrderSummary", () => {

  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6'
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d'


  //hook
  beforeEach(() => {
    //We don't wanna actually save to local storage, hence we mock the function. Because we are testing the removeFromCart function which calls saveToStorage which calls localStorage setItem.
    spyOn(localStorage, 'setItem');

    document.querySelector('.js-test-container').innerHTML = `
    <div class="js-cart-summary"></div>
    <div class="js-payment-summary"></div>
    `;


    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify(
        [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1',
      },{
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2',
      }]
    );

    });
    loadFromStorage();
    renderOrderSummary();
  });

    it("renders the cart", () => {

      // Check that the cart has been rendered with 2 items as provided in the mock data
      expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(2);

      // Check that the quantity of the items in the cart has been rendered correctly
      expect(document.querySelector(`.js-product-quantity-${productId1}`).innerText).toContain('Quantity: 2');

      // Check that the quantity of the items in the cart has been rendered correctly
      expect(document.querySelector(`.js-product-quantity-${productId2}`).innerText).toContain('Quantity: 1');
      
    });


    it('removes a product from the cart', ()=>{

      

      document.querySelector(`.js-delete-link-${productId1}`).click();

      expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(1);

      expect(
        document.querySelector(`.js-cart-item-container-${productId1}`)
      ).toEqual(null);
      
      expect(
        document.querySelector(`.js-cart-item-container-${productId2}`)
      ).not.toEqual(null);
      
      expect(cart.length).toEqual(1);
      expect(cart[0].productId).toEqual(productId2);
    
    });

    //hook
    afterEach(()=>{
      //clear the container
      document.querySelector('.js-test-container').innerHTML = '';
    });
 });


 //Another hooks: beforeAll, afterAll