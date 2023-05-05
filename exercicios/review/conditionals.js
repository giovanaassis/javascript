// if else
let hour = 5.30

if (hour >= 6 && hour < 12){
    console.log('Good Morning');
}
else if (hour >= 12 && hour < 18){
    console.log('Good Afternoon');
}
else {
    console.log('Good Night');
}

// switch case
let permission = 'diretor';

switch (permission) {
    case 'comum':
        console.log('Usuário Comum');
    break;

    case 'gerente':
        console.log('Usuário Gerente');
    break;

    case 'diretor':
        console.log('Usuário Diretor');
    break;

    default:
        console.log('Usuário não reconhecido');
}