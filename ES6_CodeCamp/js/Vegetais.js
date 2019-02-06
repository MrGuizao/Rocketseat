export class Vegetal{
     constructor(type, legs){
          this.type = type;
          this.legs = legs;
     }
     makeNoise(sound = 'Barulho'){
          console.log(sound);
     }
     static funcaoNova(){
          return 10 + 10;

     }
 
}
