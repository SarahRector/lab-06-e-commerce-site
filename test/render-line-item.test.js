import wares from '../data/wares.js';
import { findById } from '../common/utils.js';
import renderLineItem from '../shopping-cart/render-line-item.js';

const test = QUnit.test;

QUnit.module('Render Line Item');

test('renders a line item', assert => {
    const lineItem = {
        id: 'moby-dick-whale',
        quantity: 4,
    };

    const mobyDick = findById(wares, lineItem.id);
    const expected = '<tr><td class="align-left">Moby Dick</td><td>4</td><td>$8.00</td><td class="line-item-total">$32.00</td></tr>';

    const dom = renderLineItem(lineItem, mobyDick);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});