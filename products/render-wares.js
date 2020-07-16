import { findById, } from '../common/utils.js';


export function renderWares(wares) {
    const li = document.createElement('li');
    const category = wares.category;
    li.classList.add(category);
    const waresTitle = wares.description;
    li.title = waresTitle;

    const imgEl = document.createElement('img');
    imgEl.src = '../assets/' + wares.image;
    imgEl.alt = wares.name + ' Image';
    li.append(imgEl);

    const h3 = document.createElement('h3');
    h3.textContent = wares.name;
    li.append(h3);

    const pEl = document.createElement('p');
    pEl.classList.add('price');
    pEl.textContent = `$${wares.price.toFixed(2)}`;

    const buttonEl = document.createElement('button');
    buttonEl.value = wares.id;
    buttonEl.textContent = 'Add';

    const labelEl = document.createElement('label');
    labelEl.for = 'quantity';
    labelEl.textContent = 'Quantity';

    const myInput = document.createElement('input');
    myInput.type = 'number';
    myInput.id = 'quantity';
    myInput.name = 'quantity';
    myInput.min = 1;
    myInput.max = 200;
    myInput.append(labelEl);

    buttonEl.addEventListener('click', () => {
        const emptyCart = '[]';
        const localStorageCart = localStorage.getItem('CART') || emptyCart;
        const cart = JSON.parse(localStorageCart);
        const quantityInput = Number(myInput.value);

        let itemInCart = findById(cart, wares.id);

        if (!itemInCart) {
            const initializedCartItem = {
                id: wares.id,
                quantity: quantityInput
            };
            cart.push(initializedCartItem);
        } else {
            itemInCart.quantity = itemInCart.quantity + quantityInput;
        }

        const stringyCart = JSON.stringify(cart);
        localStorage.setItem('CART', stringyCart);
        
        alert('1 ' + wares.name + ' added to cart');
    });

    pEl.append(buttonEl, myInput, labelEl);
    li.append(pEl);
    
    return li;
}
