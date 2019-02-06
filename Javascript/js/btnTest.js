let btnClick = document.querySelector('body button');
let btnClick2 = document.querySelector('body #btn2');
let btnClick3 = document.querySelector('body #btn3');
let local = document.querySelector('body');

function clickBtn(){
     let localCreate = document.createElement('p');
     localCreate.setAttribute('style', 'color: #fff555; font-size: 2.5rem; text-align: center;');
     local.appendChild(localCreate);
     localCreate.textContent = 'You clicked me!';
     console.log("Olar");
     
};
function clickBtn2(){
     let born = document.createElement('article');
     born.setAttribute('style', 'width: 100px; height: 100px; border-radius: 300px; background-color: #b74aff;');
     local.setAttribute('style', 'display: flex; flex-flow: wrap row;');
     local.appendChild(born);
     console.log("Olar 2");

}
btnClick.onclick = clickBtn;
btnClick2.onclick = clickBtn2;
// btnClick.onclick = clickBtn3;
