// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderWares } from '../products/render-wares.js';

const test = QUnit.test;

QUnit.module('Render Wares');

test('renders a ware', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const whaleShark = {
        id: 'whale-shark',
        name: 'Whale Shark',
        image: 'whale-shark.jpg',
        description: 'This is not the whale you are looking for',
        category: 'shark',
        price: 5.00,
        cost: 2.00
    };
    const expected = '<li class="shark" title="This is not the whale you are looking for"><img src="../assets/whale-shark.jpg" alt="Whale Shark Image"><h3>Whale Shark</h3><p class="price">$5.00<button value="whale-shark">Add</button><input type="number" id="quantity" name="quantity" min="1" max="200"><label>Quantity</label></p></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderWares(whaleShark);
    const html = dom.outerHTML;
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(html, expected);
});
