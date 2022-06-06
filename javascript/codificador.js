
var btnCodificar = document.querySelector("#btnCodificar");

var Codigos = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
};

function Codificador(texto){

    var textoCodificado = String(texto).replace(/a|e|i|o|u/gi, function (vogal) {
        
        switch (vogal) {
            case "a":
                return Codigos.a;
  
            case "e":
                return Codigos.e;
      
            case "i":
               return Codigos.i;
            
            case "o":    
                return Codigos.o;

            case "u":
                return Codigos.u;
        
            default:
                break;
        }
    });

    return textoCodificado;
}

btnCodificar.addEventListener("click", function(){
    var textoCodificado = Codificador(textoEntrada.value);
    pSaida.innerHTML = textoCodificado;
});