function Varios(...arg) {
     let total = arg.reduce((x, y) => x + y);

     console.log(arg);
     console.log(total);

}
Varios(45, 23, 31, 42, 46);
document.body.style.backgroundColor = "red";

let complete = [
     {
          'Nome': 'Elefante',
          'Idade': 34,
          'sexo': 'M'
     },
     {
          'Nome': 'Grillo',
          'Idade': 3,
          'sexo': 'F'
     },
     {
          'Nome': 'Morcego',
          'Idade': 1,
          'sexo': 'F'
     }

];
console.log(complete);
let conquer = [23, 45, 67, 65, 42, 13];
let universo = () => {
     for (rail of conquer){
          console.log(rail);
     }
}
universo();
let andromeda = ((y, z) => 34 * 3);
console.log(andromeda);
