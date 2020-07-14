import wares from '../data/wares.js';
import cart from '../data/cart.js';
import { findById } from '../common/utils.js';
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