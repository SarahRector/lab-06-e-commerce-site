
import wares from '../data/wares.js';
import { 
    findById, 
    calcOrderTotal, 
    toUSD, 
    getCart, 
    orderConfirmation 
} from '../common/utils.js';
import renderLineItem from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
const placeOrderButton = document.getElementById('place-order-button');
const cart = getCart();

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const ware = findById(wares, lineItem.id);
    const dom = renderLineItem(lineItem, ware);

    tbody.append(dom);
}

const orderTotal = calcOrderTotal(cart, wares);
orderTotalCell.textContent = toUSD(orderTotal);

if (cart.length === 0) {
    placeOrderButton.disabled = true;
} else {
    placeOrderButton.addEventListener('click', () => {
        alert(`Whale, whale, whale, what have we here? You just placed an order for ${orderConfirmation()}. Enjoy the newest additions to your pod!`);
        localStorage.removeItem('CART');
        window.location = '../';
    });
}