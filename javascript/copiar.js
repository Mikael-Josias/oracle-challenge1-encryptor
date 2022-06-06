
var btnCopiar = document.querySelector("#btnCopiar");

btnCopiar.addEventListener("click", function(){

    var textArea = document.createElement("textarea");
    textArea.value = pSaida.innerHTML;
    document.body.appendChild(textArea);
    textArea.select();

    document.execCommand("copy");

    document.body.removeChild(textArea);
});