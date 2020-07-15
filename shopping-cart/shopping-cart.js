
import wares from '../data/wares.js';
import { findById, calcOrderTotal, toUSD, getCart } from '../common/utils.js';
import renderLineItem from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
const cart = getCart();

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const ware = findById(wares, lineItem.id);
    const dom = renderLineItem(lineItem, ware);

    tbody.append(dom);
}

const orderTotal = calcOrderTotal(cart, wares);
orderTotalCell.textContent = toUSD(orderTotal);