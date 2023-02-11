/*
Arrays são conjuntos de elementos em javascript. Os arrays tem seu elemento inicial armazenado na posição 0 (zero) do array e seu último elemento na posição array.length - 1. Em objetos deste tipo é muito comum percorrer os elementos para efetuar ações, pesquisar valores entre outras coisas.

Uma forma comum de percorrer é utilizar o loop “for” tradicional. Contudo, nas últimas versões do EcmaScript foram adicionadas funções específicas para arrays e uma delas substitui o for tradicional.

Dado o array:

const numeros = [1,3,5,7,9,11,13,15];

Utilize a função nativa de arrays para escrever o valor de cada item.
*/

const numeros = [1,3,5,7,9,11,13,15];
for (var x of numeros){
    console.log("percorrendo o array:", x)
}


/*O loop for...of percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.*/