// import functions and grab DOM elements
import { renderWares } from './render-wares.js';
import wares from '../data/wares.js';
// initialize state

const list = document.getElementById('wares');
// set event listeners to update state and DOM

for (let i = 0; i < wares.length; i++) {
    const ware = wares[i];
    const dom = renderWares(ware);
    list.append(dom);
}