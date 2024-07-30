const livros = require('./listaLivros')

function menorValor(arrayProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrayProdutos.length; atual++) {
        if (arrayProdutos[atual].preco < arrayProdutos[maisBarato].preco) {
            maisBarato = atual;
        }
    }

    return maisBarato;
}

module.exports = menorValor;

//console.log(`${livros[maisBarato].titulo} é o livro mais barato é ${livros[maisBarato].preco}`)


