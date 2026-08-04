let produtos = []

for(let i=0;i<5;i++){
 produtos.push(prompt("Produto"))
}
let nome
do{
 nome = prompt("Digite um produto ou sair")
 if(nome != "sair"){
   if(produtos.includes(nome)){
      console.log("Produto está na lista")
   }else{
      console.log("Produto não está na lista")
     }
 }
  }while(nome != "sair")