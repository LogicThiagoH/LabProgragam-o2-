const h2Elemento = document.getElementById("subtitulo");
h2Elemento.innerText = "Olá, Mundo!";

const topicosElemento = document.getElementById("topicos");
topicosElemento.innerHTML = '<h3>getElementById</h3>' +
                            '<p>Busca um elemento a partir do seu identificador único</p>';
                            
const botaoImprime = document.getElementById("btn");
botaoImprime.addEventListener("click", () => {
    const entrada = document.getElementById("nome").value;
    const mensagemEle = document.getElementById("mensagem");
    mensagemEle.innerText = `Bom dia ${entrada}!`;
});

