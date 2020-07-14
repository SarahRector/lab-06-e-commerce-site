import wares from '../data/wares.js';
import cart from '../data/cart.js';
import { findById, calcLineTotal, calcOrderTotal } from '../common/utils.js';
const test = QUnit.test;

QUnit.module('Utilities');

test('find product by id', assert => {
    //arrange
    const id = 'humphrey-whale';
    const expected = 'Humphrey the Wrong-Way Whale';

    //act
    const foundWare = findById(wares, id);

    //assert
    assert.ok(foundWare);
    assert.equal(foundWare.name, expected);
});

test('find product by id returns null if no match', assert => {
    const id = 'not found';
    const expected = null;

    const foundWare = findById(wares, id);

    assert.equal(foundWare, expected);
});

test('calculate line total', (assert) => {
    const quantity = 5;
    const price = 15.00;
    const expected = 75.00;

    const total = calcLineTotal(quantity, price);

    assert.equal(total, expected);

});

test('calculate order total', (assert) => {
    const expected = 193.00;
    const cartTotal = calcOrderTotal(cart, wares);

    assert.equal(cartTotal, expected);
});