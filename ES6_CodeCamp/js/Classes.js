import { Vegetal } from './Vegetais.js';

let cat = new Vegetal('Dog', 4);
cat.legs = 2;
console.log(cat.legs);
cat.makeNoise('Noiizeee');
console.log(Vegetal.funcaoNova());
