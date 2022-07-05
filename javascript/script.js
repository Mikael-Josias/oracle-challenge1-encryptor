
var textoEntrada = document.querySelector("#textoEntrada");
var pSaida = document.querySelector("#pSaida");

function converteMinusculo(texto) {
    return String(texto).toLowerCase();
}

function removeAcento(texto) {
    return String(texto).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

textoEntrada.addEventListener("input", function (){
    var textoValidado = this.value;

    textoValidado = removeAcento(textoValidado);
    textoValidado = converteMinusculo(textoValidado);

    this.value = textoValidado;
});


function limparCampos(){
    textoEntrada.value = '';
    pSaida.innerHTML = '';

    adicionaBackgroundCadeado();
}

function removeBackgroundCadeado() {
    var div = document.querySelector(".cadeadoImg");
    
    div.style.backgroundImage = 'none';
}

function adicionaBackgroundCadeado() {
    var background = document.querySelector(".cadeadoImg");

    background.style.backgroundImage = "url(../img/lock.png)";
    background.style.backgroundRepeat = "no-repeat";
    background.style.backgroundPosition = "center";
}