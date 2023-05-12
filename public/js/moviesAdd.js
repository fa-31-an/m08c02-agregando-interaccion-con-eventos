window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.onmouseover = () => {
        titulo.style.color = "red";
    };

    let $tituloInput = document.querySelector("#titulo");
    let estadoSecreto = 0;

    $tituloInput.onkeydown = (e) => {
        console.log(e.key);
        if (estadoSecreto == 0 && e.key == "s") {
            estadoSecreto += 1;
        } else if (estadoSecreto == 1 && e.key == "e") {
            estadoSecreto += 1;
        } else if (estadoSecreto == 2 && e.key == "c") {
            estadoSecreto += 1;
        } else if (estadoSecreto == 3 && e.key == "r") {
            estadoSecreto += 1;
        } else if (estadoSecreto == 4 && e.key == "e") {
            estadoSecreto += 1;
        } else if (estadoSecreto == 5 && e.key == "t") {
            estadoSecreto += 1;
        } else if (estadoSecreto == 6 && e.key == "o") {
            alert("SECRETO MÁGICO");
            estadoSecreto = 0;
        } else {
            estadoSecreto = 0;
        };
    };

}