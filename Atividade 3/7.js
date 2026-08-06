let cardapio = [

 {id:1,nome:"Coxinha",preco:8,categoria:"Salgado"},
 {id:2,nome:"Refrigerante",preco:6,categoria:"Bebida"},
 {id:3,nome:"Brigadeiro",preco:3,categoria:"Doce"}

]


let opcao
do{
 opcao = prompt("1 Inserir\n2 Listar\n3 Buscar preço\n4 Buscar nome\n5 Sair")

 if(opcao == 1){

  let id = Number(prompt("Id"))
  let nome = prompt("Nome")
  let preco = Number(prompt("Preço"))
  let categoria = prompt("Categoria")

  cardapio.push({id,nome,preco,categoria})

  
 }

 else if(opcao == 2){

  console.log(cardapio)

 }

 else if(opcao == 3){
  let valor = Number(prompt("Preço máximo"))
  for(let produto of cardapio){
   if(produto.preco <= valor){
    console.log(produto)
   }
  }
 }

 else if(opcao == 4){

  let nome = prompt("Nome")

  for(let produto of cardapio){

   if(produto.nome == nome){

    console.log(produto)

}

   }

 }
}while(opcao != 5)