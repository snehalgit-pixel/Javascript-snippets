/* Demonstrating objects and classes
importing from practice18.js
*/
import { Animal } from './practice18.js';
let tiger = new Animal('Cat', 4);
let v = `Tiger: Family: ${tiger.family} Legs:${tiger.legs}`;
console.log(v);
tiger.makeNoise('Roar');