let notasAluno = {

 matematica: 8.5,
 portugues: 7,
 historia: 9,
 biologia: 6.5

}

let soma = 0
let qtd = 0

for(let nota in notasAluno){

 soma += notasAluno[nota]
 qtd++

}

let media = soma / qtd
console.log("Média: " + media)
if(media >= 7){

 console.log("Está indo bem")

}else{

 console.log("Tente estudar")
}

