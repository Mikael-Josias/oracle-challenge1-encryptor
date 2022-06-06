
var btnCodificar = document.querySelector("#btnCodificar");
var btnDecodificar = document.querySelector("#btnDecodificar");

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

function Decodificador(texto) {
    
    var textoDecodificado = String(texto).replace(/ai|enter|imes|ober|ufat/gi, function (codigo) {
        
        switch (codigo) {
            case Codigos.a:
                return "a";
  
            case Codigos.e:
                return "e";
      
            case Codigos.i:
               return "i";
            
            case Codigos.o:    
                return "o";

            case Codigos.u:
                return "u";
        
            default:
                break;
        }
    });
    
    return textoDecodificado;
}

btnDecodificar.addEventListener("click", function() {
    var textoDecodificado = Decodificador(textoEntrada.value);
    pSaida.innerHTML = textoDecodificado;
});