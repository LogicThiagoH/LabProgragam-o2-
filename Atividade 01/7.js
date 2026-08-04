let presencas = 0

 for(let i=1;i<=10;i++){

let resp = prompt("P ou F")

 if(resp == "P" || resp == "p"){
   presencas++
 }

}

  let frequencia = presencas*10
 console.log("Frequência: " + frequencia + "%")
if(frequencia >= 75){
 console.log("Aprovado")
}else{
 console.log("Reprovado")
}