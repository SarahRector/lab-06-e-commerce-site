export function findById(wares, id) {
    for (let i = 0; i < wares.length; i++) {
        const ware = wares[i];

        if (ware.id === id) {
            return ware;
        }
    }
    return null;
}

export function toUSD(number) {
    return number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}

export function calcLineTotal(quantity, price) {
    const amount = quantity * price;
    return roundCurrency(amount);
}

function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}

export function calcOrderTotal(cart, wares) {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const ware = findById(wares, lineItem.id);
        const lineTotal = calcLineTotal(lineItem.quantity, ware.price);
        orderTotal += lineTotal;
    }
    return roundCurrency(orderTotal);
}

export function getCart() {
    const rawCart = localStorage.getItem('CART');
    const cart = JSON.parse(rawCart) || [];
    return cart;
}