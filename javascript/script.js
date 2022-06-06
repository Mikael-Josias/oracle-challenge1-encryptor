
var textoEntrada = document.querySelector("#textoEntrada");

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