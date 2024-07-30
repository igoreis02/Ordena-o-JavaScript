const livros =  require('./listaLivros');
const menorValor =  require('./menosValor');

for(let atual = 0; atual < livros.length ; atual++){
    let menor = menorValor(livros,atual);

    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual
}
console.log(livros);

//utilizando o for each

livros.forEach((livro, indice) =>{
    let menor = menorValor(livros,indice);

    let valorAtual = livro[indice];
    let menorValor = livro[menor];

    livros[indice] = livroMenorPreco;
    livros[menor] =livroAtual
})