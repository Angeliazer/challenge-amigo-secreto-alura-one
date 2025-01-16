//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function limpaCampo(){
    let campo = document.querySelector('input');
    campo.value = '';
    campo.focus();
}

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo.length > 0) {
        listaAmigos.push(amigo);
        let lista = document.getElementById('listaAmigos');
        let novoAmigo = document.createElement('li');
        novoAmigo.innerText = listaAmigos[listaAmigos.length - 1];
        novoAmigo.setAttribute('id', listaAmigos.length-1);
        lista.appendChild(novoAmigo);
    } else
        alert('Por favor, insira um nome válido!');
    limpaCampo();
}