let botao = document.getElementById('botao');
function calculadora(){
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado')


let imc = (peso / (altura*altura)).toFixed(2);
let r = '';
if(altura !== "" && peso !==""){
    if(imc < 18.5){
        r= "Abaixo do peso!"
    }else if(imc >= 18.5 && imc <= 24.9 ){
        r = "Você está com o peso ideal!"
    }else if(imc >= 25.0 && imc <= 29.9){
        r = "Cuidado! Obesidade grau I"
    }else if(imc >= 30.0 && imc <= 39.9 ){
        r = "Cuidado! Obesidade grau II"
    }else{
        r = "Cuidado! Obesidade grau III"
    }
    resultado.textContent = `Seu IMC é ${imc}! ${r}`
} else {
    resultado.textContent = 'Preencha todos os campos'
}
}
botao.addEventListener ('click', calculadora);