import { toUSD } from '../common/utils.js';

function renderLineItem(lineItem, ware) {
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.className = 'align-left';
    nameCell.textContent = ware.name;
    tr.append(nameCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    tr.append(quantityCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = toUSD(ware.price);
    tr.append(priceCell);

    const itemTotalCell = document.createElement('td');
    itemTotalCell.className = 'line-item-total';
    const total = lineItem.quantity * ware.price;
    itemTotalCell.textContent = toUSD(total);
    tr.append(itemTotalCell);
    
    return tr;
}

export default renderLineItem;