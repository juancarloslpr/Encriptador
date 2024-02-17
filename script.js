document.addEventListener("DOMContentLoaded", function () {
    var botonEncriptar = document.querySelector(".btn-encriptar");
    var botonDesencriptar = document.querySelector(".btn-desencriptar");
    var munieco = document.querySelector(".contenedor-munieco");
    var contenedor = document.querySelector(".contenedor-parrafo");
    var resultado = document.querySelector(".texto-resultado");

    botonEncriptar.onclick = encriptar;
    botonDesencriptar.onclick = desencriptar;

    function encriptar() {
        ocultarAdelante();
        var cajatexto = recuperarTexto();
        resultado.textContent = encriptarTexto(cajatexto);
    }

    function desencriptar() {
        ocultarAdelante();
        var cajatexto = recuperarTexto();
        resultado.textContent = desencriptarTexto(cajatexto);
    }

    function recuperarTexto() {
        var cajatexto = document.querySelector(".caja-texto");
        return cajatexto.value;
    }

    function ocultarAdelante() {
        munieco.classList.add("ocultar");
        contenedor.classList.add("ocultar");
    }

    function encriptarTexto(mensaje) {
        var texto = mensaje;
        var textoFinal = "";

        for (var i = 0; i < texto.length; i++) {
            switch (texto[i]) {
                case "a":
                    textoFinal += "ai";
                    break;
                case "e":
                    textoFinal += "enter";
                    break;
                case "i":
                    textoFinal += "imes";
                    break;
                case "o":
                    textoFinal += "ober";
                    break;
                case "u":
                    textoFinal += "ufat";
                    break;
                default:
                    textoFinal += texto[i];
            }
        }
        return textoFinal;
    }

    function desencriptarTexto(mensaje) {
        var texto = mensaje;
        var textoFinal = "";

        for (var i = 0; i < texto.length; i++) {
            if (texto[i] == "a" && texto[i + 1] == "i") {
                textoFinal += "a";
                i++;
            } else if (texto[i] == "e" && texto.slice(i, i + 5) == "enter") {
                textoFinal += "e";
                i += 4;
            } else if (texto[i] == "i" && texto.slice(i, i + 4) == "imes") {
                textoFinal += "i";
                i += 3;
            } else if (texto[i] == "o" && texto.slice(i, i + 4) == "ober") {
                textoFinal += "o";
                i += 3;
            } else if (texto[i] == "u" && texto.slice(i, i + 4) == "ufat") {
                textoFinal += "u";
                i += 3;
            } else {
                textoFinal += texto[i];
            }
        }

        return textoFinal;
    }

    const btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.addEventListener("click", function () {
        var contenido = document.querySelector(".texto-resultado").textContent;
        navigator.clipboard.writeText(contenido).then(function () {
            console.log("Texto copiado al portapapeles: " + contenido);
        }).catch(function (error) {
            console.error("Error al copiar el texto: ", error);
        });
    });
});
