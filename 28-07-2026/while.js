let numero = Number(prompt("Digite um número"));

while (numero < 0) {
    
    numero = Number(prompt("Digite um numero positivo:"));
}

console.log("O numero positivo digitado foi: " + numero);
