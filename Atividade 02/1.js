let valores = []
let totalCompra = 0
for(let i=0;i<7;i++){
 let v = Number(prompt("Valor"))
 valores.push(v)
 totalCompra += v
}

if(totalCompra > 300){
 totalCompra = totalCompra * 0.9
}

console.log("Total = " + totalCompra)