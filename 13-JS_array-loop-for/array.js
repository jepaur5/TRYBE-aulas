//criando um array
var frutas = ['Maça', 'Banana'];
console.log(frutas.length);


//acessar um item (index ) do array
var primeiro = frutas[0];
console.log(primeiro);

var ultimo = frutas[frutas.length - 1];
console.log(ultimo);



//iterar um array
frutas.forEach(
    function(item, indice, array){
    console.log(item, indice);
});


//Adicionar um item ao final do array 
var adicionar = frutas.push('Laranja');
console.log(frutas);


//remover um item do final do array
var ultimo = frutas.pop();  //remove laranja do final
console.log(frutas);


//remover do inicio do array
var primeiro = frutas.shift() //remove maça do inicio
console.log(primeiro);
console.log(frutas);



//adicionar ao inicio do array
var adicionar = frutas.unshift('MOrango'); //adicionar ao inicio
console.log(adicionar);
console.log(frutas);



//procurar o indice de um item na array
frutas.push('manga');
console.log(frutas);

var pos = frutas.indexOf('Banana');
console.log(pos);


//remover um item pela posição do indice
var removeItem = frutas.splice(pos,1); //é assim que se remove um item
console.log(removeItem);
console.log(frutas);



//remover itens de uma posição de indice
var vegetais = ['Repolho', 'Nabo', 'Rabanete', 'Cenoura'];
console.log(vegetais);

var pos = 1, n=2;

var itensRemovidos = vegetais.splice(pos, n);
//Isso é como se faz para remover itens, n define o numero de 
//iten a se remover, a partir da posição (pos) em direção 
//ao fim do array.

console.log(vegetais);

console.log(itensRemovidos);




//copiar um array
var copiar = frutas.slice();  //é assim que se copia
console.log(frutas);



//accessando elementos de um array
var arr = ['este é o primeiro elemento', 'este é o segundo elemento'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[arr.length -1]);


//
var anos = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
console.log(anos[0]);


//renderer['3d'].setTexture(model,'personagem.png');


console.log(anos['2'] != anos['02']);


//propiedades de objeto que sao palavras reservadas
var promessa = { 'var':'texto', 'array':[1,2,3,4] };

console.log(promessa['var']);



//let cars = ['saab', 'volvo', 'bmw'];
//console.log(cars[0]);
//console.log(cars[1]);
//console.log(cars[2]);


//melhorando o codigo acima, usando um array
let cars = ['saab', 'volvo', 'bmw'];
for (let i = 0; i < cars.length; i++ ){
    console.log(cars[i]);
}

