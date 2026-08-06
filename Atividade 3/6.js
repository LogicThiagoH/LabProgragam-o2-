let bibliotecaJogos =[

 {titulo:"GTA V", genero:"Ação", preco:120, zerado:true},
 {titulo:"Minecraft", genero:"Sandbox", preco:90, zerado:false},
 {titulo:"Rocket League", genero:"Esporte", preco:0, zerado:true},
 {titulo:"Forza Horizon", genero:"Corrida", preco:180, zerado:false}

]

let total = 0

for(let jogo of bibliotecaJogos){

    
 total += jogo.preco

 if(jogo.zerado == true){

  console.log(jogo.titulo)

 }

}

console.log("Total gasto: R$ " + total)

