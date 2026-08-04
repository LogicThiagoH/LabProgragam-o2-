let pares = 0
let impares = 0
for(let i=1; i<=8; i++){
    let n = Number(prompt("Digite um valor"))

    if(n % 2 == 0){
    pares++
 }else{
    impares++
 }

}

 console.log("Pares: " + pares)
 
console.log("Ímpares: " + impares)