const listaLivros = require('./arrays1');
const ordena = require('./quickSort');

const livros = ordena(listaLivros, 0 ,listaLivros.length-1)

function busca(array, de, ate, valorBuscado ){
    const meio = Math.floor((de + ate)/2);
    const atual = array[meio];

    if(de > ate){ //se o valor econtrado nao estiver dentro do preço o de nao pode ser maior que ate entao ele nao existe 
        return -1;
    }

    if(valorBuscado === atual.preco){
        return meio;
    }

    if (valorBuscado < atual.preco){
        return busca(array, de , meio - 1, valorBuscado);
    }

    if(valorBuscado > atual.preco){
        return busca(array,meio + 1, ate, valorBuscado);
    }
}

//console.log(livros);
const posicao = busca(livros, 0, livros.length - 1, 30)

if( posicao >= 0){
    console.log(livros[posicao])
}else{
    console.log('Livro não econtrado')
}

