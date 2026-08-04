  let fila = []

for(let i=1;i<=5;i++){
 fila.push(prompt("Nome do cliente"))
}
while(fila.length > 0){

 let cliente = fila.shift()
 console.log(cliente + " foi atendido")

}
console.log(fila)