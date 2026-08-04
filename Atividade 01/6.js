let maior
let menor

for(let i=1;i<=10;i++){

 
    let valor = Number(prompt("Digite um valor"))

 if(i==1){
   maior = valor
   menor = valor
 }
 if(valor > maior){
   maior = valor
  }

 if(valor < menor){
   menor = valor
}

 }

console.log("Maior: " + maior)
console.log("Menor: " + menor)
