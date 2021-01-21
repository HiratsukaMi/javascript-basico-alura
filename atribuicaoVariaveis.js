const nome = 'Michelly';

//interpolação de variável dentro do texto
//O texto precisa estar entre crases para a interpolação funcionar
console.log(`Meu nome é ${nome}`);

//arrays - listas
const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`); //adiciona item à lista
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); /*deleta iteem da lista. Precisa informar
primeiro a posição do item e a quantidade de itens que serão removidos a partir da posição informada.*/
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]); //exibe apenas o item que que está guardado na posição informada entre colchetes.