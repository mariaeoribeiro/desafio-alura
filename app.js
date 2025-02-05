// Criar array
let amigos = [];

// Criar função add amigos
function adicionarAmigo() {
    const nome = document.getElementById('amigo').value;

    if(nome.trim() === '') {
        alert('Escreva um nome, por favor.');
        return;
    }

    amigos.push(nome);
    revisarLista();
    document.getElementById('amigo').value = '';
}

// Criar função add nome no input, item da lista ('li'), limpar lista para add nome
function revisarLista() {
    const itemLista = document.getElementById('listaAmigos');
    itemLista.innerHTML = '';

    for(let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        itemLista.appendChild(li);
    }
}

// Criar função sortear amigos
function sortearAmigo() {
    if(amigos.length === 0) {
        alert('Não há amigos na sua lista, escreva para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    document.getElementById('resultado').innerHTML = amigoSorteado;
}