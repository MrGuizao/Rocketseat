// let nome = 'Guilherme';
// let nome2 = 'Henrique';
// let nome3 = 34;
// let fullName = `${nome} ${nome2}
// ${nome3 * 5}`;

// console.log(nome + " " + nome2);
// console.log(fullName);

//Destructuring Objects

let infos = {
     nome: 'Sonia',
     idade: 53,
     ocupacao: 'Dona de casa kkj',
     horarioDeTrabalho:{
          manha: 'Completo',
          tarde: 'Meio',
          noite: 'folga',
     },
     hobby: 'Brigar',

};
let {nome, ocupacao, horarioDeTrabalho: {manha, tarde}} = infos;
console.log(nome, ocupacao, manha, tarde);

let skills = {
     name: 'Ornn',
     str: 24,
     vigor: 20,
     hp: 770,

};
console.log(`${skills.name} ${skills.str} ${skills.hp}`);
let {name, str, vigor, hp} = skills;
console.log(name, str, vigor, hp);
