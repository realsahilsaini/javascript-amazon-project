import {formatCurrency} from '../scripts/utils/money.js';

//Basic test case 
formatCurrency(2095) === '20.95' 
? console.log('Test passed') 
: console.log('Test failed');

//Edge case
formatCurrency(0) === '0.00' 
? console.log('Test passed') 
: console.log('Test failed');

//Edge case
formatCurrency(2000.5) === '20.01' 
? console.log('Test passed') 
: console.log('Test failed');

//Edge case
formatCurrency(2000.4) === '20.00' 
? console.log('Test passed') 
: console.log('Test failed');



