let peçaXadrez;
peçaXadrez = 'perro';

switch (peçaXadrez) {
    case 'bispo':
        console.log('bispo --> diagonal');
        break;

    case 'rei':
        console.log('rei --> uma casa apenas');
        break;
    
    case 'rainha':
        console.log('rainha --> diagonal e horizontal');
        break;

    case 'cavalo':
        console.log('cavalo --> L pode pular sobre as peças');
        break;

    case 'torre':
        console.log('torre --> horizontal');
        break;
        
    case 'peao':
        console.log('peao --> apenas uma casa para frente');
        break;

    default:
        console.log('peça invalida');
   
};
