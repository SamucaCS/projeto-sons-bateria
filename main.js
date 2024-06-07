function tocaSom(seletorAudio) {
    document.querySelector(seletorAudio).play();

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('elemento não encontrado ou seletor não encontrado');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSom;

let contador = 0;

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;


    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (e) {
        console.log(e.code === 'Space');

        if (e.code === 'Space' || e.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    };
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
document.querySelectorAll('.tecla').forEach(function (tecla) {
    tecla.addEventListener('click', function (event) {
        const elementoClicado = event.target;

        elementoClicado.classList.toggle('ativa');
    });
});
