
//exercicio1
//faça um programa que, dado um valor n qualquer, seja n>1, 
//imprima na tela um quadrado feito de asteriscos
//de lado de tamanho n. 
//let n = 5;
//let lineIndex;
//let symbol = '*';
//let inputLine = '';

//for ( lineIndex = 0; lineIndex < n; lineIndex++ ){
//    inputLine = inputLine + symbol;
//};
//for ( lineIndex = 0; lineIndex < n; lineIndex++ ){
//    console.log(inputLine);
//};




//exercicio2
//faça o mesmo que antes, mas que imprima um
// triangulo retangulo com 5 asteriscos de base.

//let size = 5;
//let lineIndex;
//let symbol = '*';
//let inputLine = '';

//for (lineIndex = 0; lineIndex <= size; lineIndex++ ){
//    console.log(inputLine);
//    inputLine = inputLine + symbol;
//}



//exercicio2 . modifico de posiçao o console.log e o resultado
//é outro. A base tem 6 asteriscos

//let size = 5;
//let lineIndex;
//let symbol = '*';
//let inputLine = '';

//for (lineIndex = 0; lineIndex <= size; lineIndex++ ){
//        inputLine = inputLine + symbol;
//        console.log(inputLine);
//}



//exercise3. Agora inverta o lado do triangulo
//let n = 6;
//let lineIndex;
//let columnIndex;
//let symbol = '*';
//let inputLine = '';
//let inputPosition = n;

//for (lineIndex = 0; lineIndex < n; lineIndex++){
//    for (columnIndex = 0; columnIndex <= n; columnIndex++){
//        if (columnIndex < inputPosition){
//            inputLine = inputLine + ' '; //um espaço vazio entre as comilhas
//        } else{                          //esse espaço inverte o triangulo
//            inputLine = inputLine + symbol;
//        }
//    }
//    console.log(inputLine);
//    inputLine = '';
//    inputPosition--;
//};



//exercise4. por fim faça uma piramide com n asteriscos de base

//let n = 7;
//let lineIndex;
//let lineColumn;
//let lineInput = '';
//let symbol = '*';

//let midOfMatrix = (n + 1)/2;
//let controlLeft = midOfMatrix;
//let controlRight = midOfMatrix;

//for (lineIndex = 0; lineIndex <= midOfMatrix; lineIndex++){
//    for (lineColumn = 1; lineColumn <= n; lineColumn++){
//      if (lineColumn > controlRight && lineColumn < controlLeft){
//         lineInput = lineInput + symbol;   
//       } else {
//           lineInput = lineInput + ' '; //necessario o espaço vazio
//       }   
//    }
//    console.log(lineInput);
//    lineInput = '';
//    controlRight--;
//    controlLeft++;
//};





//EXERCISO 5
//FAÇA UMA PIRAMIDE COM N ASTERISCOS DE BASE, QUE SEJA VAZIA NO MEIO:

let n = 7;
let lineInput = [];
let baseMatrix = [];
let symbol = '*';
let matrix = [];
let midOfMatrix = (n+1)/2;
let controlLeft = 1;
let controlRight = n - 2;

for (let lineColumn = 0; lineColumn < n; lineColumn++){
    baseMatrix[lineColumn] = symbol;
}
matrix[0] = baseMatrix;
for (let lineIndex = 1; lineIndex < n; lineIndex++){
    for (let lineColumn = 0; lineColumn < n; lineColumn++){
        if(lineColumn === controlLeft || lineColumn === controlRight){
          lineInput[lineColumn] = symbol;
    } else {
        lineInput[lineColumn] = ' ';
    }
}
  matrix[lineIndex] = lineInput;
  controlLeft++;
  controlRight--;
  lineInput = [];
  if (controlLeft > controlRight) break;
}

let result = '';
for (let lineIndex = matrix.length -1; lineIndex >= 0; lineIndex--){
    for (let lineColumn = 0; lineColumn < n; lineColumn++){
        result = result + matrix[lineIndex][lineColumn];
    }
    console.log(result);
    result = '';
} 










