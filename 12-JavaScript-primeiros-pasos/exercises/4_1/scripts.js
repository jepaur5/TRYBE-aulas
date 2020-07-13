//let idade = 5;
//console.log(idade);
//let altura = 180;
//console.log(altura);  



//let hora = 22;

//if (hora > 6 && hora < 12) {
//    console.log("bom dia");
//}
//else if (hora > 12 && hora < 18) {
//    console.log("boa tarde");
//}
//else {
//console.log("boa noite");
//}




let permissao; //comum, gerente, diretor
permissao = 'diretor';

switch (permissao) {
    case 'comum':
        console.log('usuario comum');
        break;

    case 'gerente':
        console.log('usuario gerente');
        break;   
        
        
    case 'diretor':
         console.log('usuario diretor');
        break;    
   
    default:
    console.log('usuario nao reconhecido');        
}

