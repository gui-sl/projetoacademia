var peso = document.getElementById('peso');
var altura = document.getElementById('altura');
var resultado = document.getElementById('result');

function calcularImc(){
    resultado.value = ''

    if(peso.value != '' && altura.value != ''){
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        console.log(imc)
        if(imc < 18.5){
            resultado.value = 'abaixo do peso'
        }
        else if(imc < 25){
            resultado.value = 'Normal'
        }
    }
}