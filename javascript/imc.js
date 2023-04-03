var peso = document.getElementById('peso');
var altura = document.getElementById('altura');
var resultado = document.getElementById('resultado');
var calcular = document.getElementById('calcular')

calcular.onclick = function calcularImc(){
    resultado.value = ''

    if(peso.value != '' && altura.value != ''){
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        console.log(imc)
        if(imc < 18.5){
            resultado.value = `Seu IMC é: ${imc}, Abaixo do peso`
            resultado.style.backgroundColor = '#00438f'
        }
        else if(imc < 25){
            resultado.value = `Seu IMC é: ${imc}, Normal`
            resultado.style.backgroundColor = '#14ac00'
        }
        else if(imc < 30){
            resultado.value =  `Seu IMC é: ${imc}, Sobrepeso`
            resultado.style.backgroundColor = '#e9d30e'
        }
        else if(imc < 35){
            resultado.value = `Seu IMC é: ${imc}, Obesidade grau I`
            resultado.style.backgroundColor = '#ff9900'
        }
        else{
            resultado.value = `Seu IMC é: ${imc}, Obesidade grau II`
            resultado.style.backgroundColor = '#ca0000'
        }
    }
}

