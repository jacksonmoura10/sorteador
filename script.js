let nomes = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let lista = document.getElementById('listaAmigos');
    let nome = input.value.trim();

    if (nome === "" || nomes.includes(nome)) {
        alert('Por favor, insira um nome válido ou um nome que não esteja na lista!');
        input.value = '';
        return;
    }

    nomes.push(nome);
    let item = document.createElement('li');
    item.textContent = nome;
    lista.appendChild(item);
    input.value = '';
}

function sortearAmigo() {
    if (nomes.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }

    let sorteados = []; // Lista para armazenar os amigos sorteados
    let resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = ''; // Limpa os resultados anteriores

    let copiaNomes = [...nomes]; // Cria uma cópia para sorteio

    for (let i = 0; i < nomes.length; i++) {
        if (copiaNomes.length === 1 && copiaNomes[0] === nomes[i]) {
            // Se sobrou apenas um nome e ele for igual ao atual, refaz o sorteio
            sortearAmigo();
            return;
        }

        let indice = Math.floor(Math.random() * copiaNomes.length);

        while (copiaNomes[indice] === nomes[i]) {
            indice = Math.floor(Math.random() * copiaNomes.length);
        }

        let sorteado = copiaNomes.splice(indice, 1)[0]; // Remove o nome sorteado da cópia
        sorteados.push(`${nomes[i]} → ${sorteado}`);

        let item = document.createElement('li');
        item.textContent = `${nomes[i]} → ${sorteado}`;
        resultadoLista.appendChild(item);
    }

    alert('Sorteio realizado! Veja os pares na tela.');
}

// Adiciona os eventos aos botões
document.getElementById('adicionarAmigo').addEventListener('click', adicionarAmigo);
document.getElementById('sortearAmigo').addEventListener('click', sortearAmigo);
