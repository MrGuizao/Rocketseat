let inpKey = document.querySelector('#inpKey');
let inpValue = document.querySelector('#inpValue');
let btnInsert = document.querySelector('fieldset #btnInsert');
let lsOutput = document.querySelector('fieldset #lsOutput');

btnInsert.onclick = function(){
     let key = inpKey.value;
     let value = inpValue.value;

     if (key && value) {
          localStorage.setItem(key, value);
          location.reload();
     }

};
for (let i = 0; i < localStorage.length; i++) {
     let key = localStorage.key(i);
     let value = localStorage.getItem(key);

     lsOutput.innerHTML += `${key}: ${value}<br/>`;
}
var sexo = localStorage.setItem('Sexo', 'Valor Usado');
console.log(localStorage.getItem('Sexo'));
