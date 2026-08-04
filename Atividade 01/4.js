let idade
let qtd = 0

let somaIdade = 0

do{

 idade = Number(prompt("Digite a idade"))

  if(idade > 0){
   somaIdade += idade
   qtd++
 }

}while(idade > 0)

    
console.log("Média = " + (somaIdade/qtd))
