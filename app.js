//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function limpaCampo(){
    let campo = document.querySelector('input');
    campo.value = '';
    campo.focus();
}

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo.length > 0) {
        listaAmigos.push(nomeAmigo);
        let lista = document.getElementById('listaAmigos');
        let novoAmigo = document.createElement('li');
        novoAmigo.innerText = listaAmigos[listaAmigos.length - 1];
        novoAmigo.setAttribute('id', listaAmigos.length-1);
        lista.appendChild(novoAmigo);
    } else
        alert('Por favor, insira um nome válido!');
    limpaCampo();
}

function sortearAmigo(){
    if (listaAmigos.length > 0){

        for (let i = 0; i < listaAmigos.length; i++){
            let linha = document.getElementById(i.toString());
            linha.remove();
        }

        //Total de Amigos para sorteio....
        let numAmigos = listaAmigos.length;

        //Maior número aleatório tem que ser no máximo, o número de amigos para sorteio
        let amigoSorteado = parseInt(Math.random() * numAmigos) + 1;

        let lista = document.getElementById('resultado');
        let sorteado = document.createElement('li');
        sorteado.innerText = `O amigo secreto sorteado é: ${listaAmigos[amigoSorteado - 1]}`;
        lista.appendChild(sorteado);
    } else
    {
        alert('Não existem amigos para sorteio.!')
    }

}