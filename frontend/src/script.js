document.getElementById('form-produto').addEventListener('submit', function (e) {
    e.preventDefault();
    adicionarItem('produtos', 'nome-produto', 'preco-produto');
    exibirItens('produtos', 'lista-produtos');
});

document.getElementById('form-doacao').addEventListener('submit', function (e) {
    e.preventDefault();
    adicionarItem('doacoes', 'nome-doacao', 'valor-doacao');
    exibirItens('doacoes', 'lista-doacoes');
});

document.getElementById('form-estoque').addEventListener('submit', function (e) {
    e.preventDefault();
    adicionarItem('estoque', 'nome-estoque', 'quantidade-estoque');
    exibirItens('estoque', 'lista-estoque');
});

function adicionarItem(tipo, nomeId, valorId) {
    const nome = document.getElementById(nomeId).value;
    const valor = document.getElementById(valorId).value;

    const itens = JSON.parse(localStorage.getItem(tipo)) || [];
    itens.push({ nome, valor });
    localStorage.setItem(tipo, JSON.stringify(itens));

    document.getElementById(nomeId).value = '';
    document.getElementById(valorId).value = '';
}

function exibirItens(tipo, listaId) {
    const itens = JSON.parse(localStorage.getItem(tipo)) || [];
    const lista = document.getElementById(listaId);
    lista.innerHTML = '';

    itens.forEach((item, index) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <span>${item.nome}: R$${parseFloat(item.valor).toFixed(2)}</span>
            <button onclick="removerItem('${tipo}', ${index}, '${listaId}')">Excluir</button>
        `;
        lista.appendChild(div);
    });
}

function removerItem(tipo, index, listaId) {
    const itens = JSON.parse(localStorage.getItem(tipo)) || [];
    itens.splice(index, 1);
    localStorage.setItem(tipo, JSON.stringify(itens));
    exibirItens(tipo, listaId);
}

// Exibir itens ao carregar a página
exibirItens('produtos', 'lista-produtos');
exibirItens('doacoes', 'lista-doacoes');
exibirItens('estoque', 'lista-estoque');
