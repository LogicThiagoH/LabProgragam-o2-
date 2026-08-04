let temp = []
 let soma = 0
for(let i=0;i<7;i++){
 let t = Number(prompt("Temperatura"))
 temp.push(t)
 soma += t

}
let maior = Math.max(...temp)
let menor = Math.min(...temp)
console.log("Média: " + soma/7)
console.log("Maior: " + maior)
console.log("Menor: " + menor)
