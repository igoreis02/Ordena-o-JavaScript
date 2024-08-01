const livros = require('./arrays1')

function margeSort(array, nivelAninhamento = 0){

    console.log(`Nivel de aninhamento: ${nivelAninhamento}`)
    console.log(array)

    if(array.length > 1){
        const meio = Math.floor(array.length/2); //METODO MATH.FLOOR ARREDONDA O NUMERO PARA BAIXO
        const parte1 = margeSort(array.slice(0,meio),nivelAninhamento+1);
        const parte2 = margeSort(array.slice(meio,array.length),nivelAninhamento+1);

        array = ordena(parte1, parte2);

    }

    return array;
}

function ordena(parte1,parte2){
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;

    const resultado = [];

    while(posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length){
        let produtoAtualParte1 = parte1[posicaoAtualParte1];
        let produtoAtualParte2 = parte2[posicaoAtualParte2];

        if(produtoAtualParte1.preco < produtoAtualParte2.preco){
            resultado.push(produtoAtualParte1);
            posicaoAtualParte1++
        }else{
            resultado.push(produtoAtualParte2);
            posicaoAtualParte2++
        }
    }

    return resultado.concat(posicaoAtualParte1< parte1.length 
        ? parte1.slice(posicaoAtualParte1) 
        : parte2.slice(posicaoAtualParte2))
}

console.log(margeSort(livros));



function dorme(milissegundos) {
    return new Promise(resolve => setTimeout(resolve, milissegundos));

}
async function incrementaNumero(numero){
    console.log(numero)
    await dorme(2000)
  
    if (numero === 10) {
            return 'finalizou'
    }
    return incrementaNumero(numero + 1)
  }
  
  incrementaNumero(1)