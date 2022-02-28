function insert(num){
    let numero = document.getElementById('resultado').innerHTML; 
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = ""
}
function back(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('resultado').innerHTML = "Nothing..."
    }
}
function muda(){
    var audio1 = new Audio();
    audio1.src = "audio/ZA WARUDO.mp4";
    audio1.play();
    namee.style.background = "rgba(210, 238, 130, 0.68)"
}
function muda(){
    var audio1 = new Audio();
    audio1.src = "audio/ZA WARUDO.mp4";
    audio1.play();
    namee.style.background = "black"
    seven.style.background = "black"
    
}