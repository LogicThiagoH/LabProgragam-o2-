let tentativas = 0
do{

 let usuario = prompt("Usuário")
  let senha = prompt("Senha")
 if(usuario == "aluno" && senha == "iftm123"){
   console.log("Login com sucesso")
   break
 }else{
   console.log("Erro de senha ou usuário")
   }

 tentativas++


}while(tentativas < 3)

if(tentativas == 3){
 console.log("Bloqueado")
 }