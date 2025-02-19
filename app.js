let nomes = []; 

function adicionarAmigo() {
    let input = document.getElementById('amigo'); 
    let lista = document.getElementById('listaAmigos'); 
    let nome = input.value.trim().toLowerCase(); 

    if (nome === '') {
        alert('Digite um nome válido!');
        return;
    }

    if (nomes.includes(nome)) {
        alert('Esse nome já foi adicionado.');
        input.value = '';
        return;
    }

    nomes.push(nome); 

    let item = document.createElement('li'); 
    item.textContent = nome;

    let removeButton = document.createElement('button'); 
    removeButton.textContent = 'Remover';
    removeButton.classList.add('remover'); 
    removeButton.addEventListener('click', () => {
        nomes = nomes.filter(n => n !== nome); 
        lista.removeChild(item);
    });

    item.appendChild(removeButton); 
    lista.appendChild(item);
    input.value = '';
    input.focus(); 
}

function sortearAmigo() {
    if (nomes.length < 2) {
        alert('Adicione pelo menos dois amigos.');
        return;
    }

    let resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = ''; 
    let sorteado = nomes[Math.floor(Math.random() * nomes.length)]; 
    let item = document.createElement('li');
    item.textContent = `Uhuu! Você tirou: ${sorteado} !!! 🎉🎊`;
    resultadoLista.appendChild(item);
}

document.getElementById('adicionarAmigo').addEventListener('click', adicionarAmigo);
document.getElementById('sortearAmigo').addEventListener('click', sortearAmigo);
document.getElementById('limparLista').addEventListener('click', () => {
    nomes = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
});
