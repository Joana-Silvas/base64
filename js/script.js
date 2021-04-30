var alfabeto = "abcdefghijklmnopqrstuvwxyz";
var entrada = document.querySelector("#converte");
var code = document.getElementsByName("codificar");
var saida = ""
var retorno = document.querySelector("#retorno");
var incremento = document.querySelector("#incremento")

function send() {
    var base = document.getElementById("baseid").selectedIndex;
    if (base == 0) {
        base64(entrada, saida)
    }
    else {
        codecesar(entrada, saida)
    }
}

function increme() {
    var base = document.getElementById("baseid").selectedIndex;
    if (base == 1) {
        elem = document.querySelector("#shift")
        elem.style.display = "block"
    }
    else {
        elem = document.querySelector("#shift")
        elem.style.display = "none"
    }
}
//BASE 64
function base64(entrada, saida) {
    if (code[0].checked) {
        teste = window.btoa(entrada.value)
        saida = saida + teste
    }
    else {
        teste = window.atob(entrada.value)
        saida = saida + teste
    }
    retorno.innerHTML = saida
}

//CIFRA DE CESAR
function codecesar(entrada, saida) {
    if (code[0].checked) {
        for (i = 0; i < entrada.value.length; i++) {
            if (entrada.value[i] == " ") {
                saida = saida + " "
            }
            else {
                calcula = alfabeto.indexOf(entrada.value[i])
                if (calcula + parseInt(incremento.value) >= alfabeto.length) {
                    dif = calcula + parseInt(incremento.value) - alfabeto.length
                    saida = saida + alfabeto[dif]
                }
                else {
                    saida = saida + alfabeto[calcula + parseInt(incremento.value)]
                }
            }
        }
    }
    else {
        for (i = 0; i < entrada.value.length; i++) {
            if (entrada.value[i] == " ") {
                saida = saida + " "
            }
            else {
                calcula = alfabeto.indexOf(entrada.value[i])
                if (calcula - parseInt(incremento.value) < 0) {
                    dif = calcula - parseInt(incremento.value)
                    saida = saida + alfabeto[alfabeto.length + dif]
                }
                else {
                    saida = saida + alfabeto[calcula - parseInt(incremento.value)]
                }
            }
        }
    }
    retorno.innerHTML = saida
}