let celular = {

 marca: "Samsung",
 modelo: "A15",
 nivelBateria: 85,
 espacoLivreGB: 32

}


for(let dado in celular){
 celular[dado] = prompt("Digite " + dado)
}
for(let dado in celular){

 console.log(dado + ": " + celular[dado])

}
