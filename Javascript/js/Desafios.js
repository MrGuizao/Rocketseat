//exercicio 01
var endereco = {
     rua: "Rua dos pinheiros",
     numero: 1293,
     bairro: "Centro",
     cidade: "São Paulo",
     uf: "SP"

};
var local = document.getElementsByTagName('h1')[0];
local.innerHTML = "O usuário mora em " + endereco.cidade +
     " / " + endereco.uf + " no bairro " + endereco.bairro +
     ", na rua '" + endereco.rua + "' com nº " + endereco.numero;

//  exercicio 02
function Pares(x, y) {
     for (x = x; x <= y; x++) {
          if (x % 2 == 0) {
               console.log(x);
          }
     }

}
console.log(Pares(15, 56));

// exercicio 03
function temHabilidade(skills) {
     for (var i = 0; i <= skills.length; i++) {
          if (skills[i] == "Javascript") {
               return true;
          } else {
               return false;
          }
     }
}
var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills));

// exercicio 04
let vermelho = document.querySelector('body #pi');
let btnClick = document.querySelector('body #btn');
function clickBtn2() {
     let born = document.createElement('article');
     born.setAttribute('class', 'circulo');
     vermelho.setAttribute('style', 'display: flex; flex-flow: wrap row;');
     vermelho.appendChild(born);
     console.log("Olar 2");

}
btnClick.onclick = clickBtn2;

// exercicio 05
function getRandomColor() {
     var letters = "0123456789ABCDEF";
     var color = "#";
     for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
     }
     return color;
}
var newColor = getRandomColor();
btnClick.onmouseover = clickBtn2;
