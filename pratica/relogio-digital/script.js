const mostrarHoraEhora = () => {
    const hoje = new Date();


    // calendário
    const mesesEscritos = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const mes = mesesEscritos[hoje.getMonth()];
    const div_data = document.querySelector('.div_data p');
    const data = hoje.getDate();
    const ano = hoje.getFullYear();
    div_data.innerHTML = `${data} de ${mes} ${ano}`;


    // relogio digital
    const horas = document.getElementById('horas');
    const minutos = document.getElementById('minutos');
    const segundos = document.getElementById('segundos');

    horas.innerHTML = formatarTempo(hoje.getHours());
    minutos.innerHTML = formatarTempo(hoje.getMinutes());
    segundos.innerHTML = formatarTempo(hoje.getSeconds());
}

const formatarTempo = (digito) => {
    return digito < 10 ? `0${digito}` : digito;
}

setInterval(mostrarHoraEhora, 1000);