//.lenght=> 
//retorna o tamanho de uma cadeia de texto

//Estrutura
//let nomeVariavel = "Escreva o texto aqui";
//console.log(nomeVariavel.lenght);

let texto = "Eu amo ser programador";
console.log(texto.length);

//.indexOf=>
//pesquisa dentro de uma string e retorna a posicao do item procurado

//Estrutura
//let nomeVariavel = "Escreva o texto aqui"
//console.log(nomeVariavel.indexOf("nomeItem");

let pesquisa = "Ola mundo";
console.log(pesquisa.indexOf("mundo"));

//.slice=>
//tem que passar 2 parametros(inicio, fim)
//imprime o item que foi indicado em sua devida posicao inicial e final

//Estrutura
////let nomeVariavel = "Escreva o texto aqui";
//console.log(nomeVariavel.slice(posicaoInicial, posicaoFinal));

//ainda podemos armazenar em uma variavel
//let nomeVariavel-2 = nomeVariavel.slice(posicaoInicial, posicaoFinal);
//console.log(nomeVariavel-2);

let texto2 = "Moro no Rio";
console.log(texto2.slice(0, 4));

//.trim()=>
//remove espacos em branco antes e depois da primeira ocorrencia de um caractere alfanumerico
//nao recebe parametros. Nao retira espacos entre palavras

//Estrutura
//let nomeVariavel = "Escreva o texto aqui";
//console.log(nomeVariavel.trim());

let texto3 = "Dia 22 24 26 28 30 32 34 Vou viajar para Italia";
let palavra3 = texto3.slice(1, 15);
console.log(palavra3.trim());

//.split()=>
//converte uma string em uma array

//Estrutura
//let nomeVariavel = "Escreva o texto aqui";
//console.log(nomeVariavel.split());

let texto4 = "Sou do planeta Marte";
console.log(texto4.split());

//.replace()=>
//substitui uma parte de um texto dentro de uma string

//Estrutura
//let nomeVariavel = "Escreve o texto aqui";
//console.log(nomeVariavel.replace("palavraAtual", "palavraNova"));

let texto5 = "Sou programador Java";
console.log(texto5.replace("Java", "Web"));
