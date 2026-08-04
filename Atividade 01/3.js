let soma = 0
let numero

do{

    
 numero = Number(prompt("Digite um número (0 para parar)"))


 if(numero != 0){
   soma += numero
   }

 }while(numero != 0)
console.log("Somatório = " + soma)
