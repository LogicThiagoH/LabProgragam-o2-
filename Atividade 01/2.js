let pessoas = Number(prompt("Quantas pessoas tem na família?"))
  let total = 0

for(let i=1;i<=pessoas;i++){

    
 let salario = Number(prompt("Salário da pessoa"))

 total = total + salario

}

console.log("Total da família: R$ " + total)

