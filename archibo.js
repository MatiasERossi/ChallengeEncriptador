var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var botonCopiar = document.querySelector(".boton-copiar");
var contenedorAdvertencia = document.querySelector(".encriptado-p")
var contenedorMunieco = document.querySelector(".contenedor-munieco");
var contenedorH3 = document.querySelector(".contenedor-h3");
var contenedorParrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copy;

function encriptar(){
    ocultarElementos();
    var area = recuperarTexto()
    resultado.textContent = encriptarTexto(area)
}

function desencriptar(){
    ocultarElementos();
    var area = recuperarTexto()
    resultado.textContent = desencriptarTexto(area)
}

function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
}

function ocultarElementos(){
    contenedorMunieco.classList.add("ocultar");
    contenedorH3.classList.add("ocultar");
    contenedorParrafo.classList.add("ocultar");
    contenedorAdvertencia.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal ="";

    for(var i = 0; i < texto.length ; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal ="";

    for(var i = 0; i < texto.length ; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i + 1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i + 4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i + 3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i + 3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i + 3;
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function copy(){
    botonCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
        }
    )
}