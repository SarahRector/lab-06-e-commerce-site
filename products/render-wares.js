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

    buttonEl.addEventListener('click', () => {
        const emptyCart = '[]';
        const localStorageCart = localStorage.getItem('CART') || emptyCart;
        const cart = JSON.parse(localStorageCart);

        let itemInCart = findById(cart, wares.id);

        if (!itemInCart) {
            const initializedCartItem = {
                id: wares.id,
                quantity: 1
            };
            cart.push(initializedCartItem);
        } else {
            itemInCart.quantity++;
        }

        const stringyCart = JSON.stringify(cart);
        localStorage.setItem('CART', stringyCart);
        
        alert('1 ' + wares.name + ' added to cart');
    });

    pEl.append(buttonEl);
    li.append(pEl);
    
    return li;
}
