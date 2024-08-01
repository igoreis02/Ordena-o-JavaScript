const livros = require('./arrays1');
//const trocaLugar = require('./encontraMenores')

function quickSort(array, esquerda, direita){
    
    if(array.length > 1){
        let indiceAtual = particiona(array,esquerda,direita);
        if(esquerda < indiceAtual -1 ){
            quickSort(array, esquerda,indiceAtual-1);
        }
        if(indiceAtual < direita){
            quickSort(array, indiceAtual, direita);
        }
    }

    return array;
}
function particiona(array, esquerda, direita){
    //console.log('array' , array);
    //console.log('Esquerda, Direira ', esquerda, direita);
    let pivo = array[Math.floor((esquerda + direita) / 2)];
    let atualEsquerda = esquerda;
    let atualDireira =  direita;

    while(atualEsquerda <= atualDireira){
        while(array[atualEsquerda].preco < pivo.preco){
            atualEsquerda++;
        }
        while(array[atualDireira].preco > pivo.preco ){
            atualDireira--;
        }
        if(atualEsquerda <= atualDireira){
            //trocaLugar(array, atualEsquerda, atualDireira)
            const elem1 =  array[atualEsquerda];
            const elem2 = array[atualDireira];

            array[atualDireira] = elem1;
            array[atualEsquerda] = elem2;

            atualEsquerda++;
            atualDireira--;
        }
    }
    return atualEsquerda;
}

//console.log(quickSort(livros, 0, livros.length - 1 ));

module.exports = quickSort;