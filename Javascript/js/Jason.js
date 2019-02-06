// let thePets = [
//      {
//           'Especie': 'Gato',
//           'Name': 'Pequeno',
//           'Idade': '7 anos'
//      },
//      {
//           'Especie': 'Gato',
//           'Name': 'Anônimo',
//           'Idade': '11 meses'
//      },
//      {
//           'Especie': 'Cachorro',
//           'Name': 'Maya',
//           'Idade': '11 anos'
//      }
// ];
// console.log(thePets[0].Especie);
// console.log(thePets[1].Name);

let animalContainer = document.querySelector('#animal-info');
let btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
     let ourRequest = new XMLHttpRequest();
     ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
     ourRequest.onload = function(){
          let ourData = JSON.parse(ourRequest.responseText);
          console.log(ourData[0]);
          renderHTML(ourData);
     };
     ourRequest.send();

});

function renderHTML(data){
     let html = '';
     for(let i = 0; i < data.length; i++){
          html += "<p>" + data[i].name + " is a " + data[i].species + ".</p>";

     }
     animalContainer.insertAdjacentHTML('beforeend', html);

}
