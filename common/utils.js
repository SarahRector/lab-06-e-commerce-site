export function findById(wares, id) {
    for (let i = 0; i < wares.length; i++) {
        const ware = wares[i];

        if (ware.id === id) {
            return ware;
        }
    }
    return null;
}

export function calcLineTotal(quantity, price) {
    const amount = quantity * price;
    return roundCurrency(amount);
}

function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}