const aluno = {
    nome: "Aristolfo",
    nota: 6,
    curso: "TINF"
}
aluno.nota = 9

aluno ["email"] = "aristolfo@gmail.com" 

for(let prop in aluno) {
    console.log(aluno)
}