firstNum = parseInt(document.getElementById("firstNum").value);
secondNum = parseInt(document.getElementById("secondNum").value);
resultado = document.getElementById("resultado");
btn = document.querySelector(".button");

function suma(){
    result = (firstNum + secondNum);
    result.value = result;
    resultado.value = result
    btn.disabled = true;
}

function resta(){
    result = (firstNum - secondNum);
    result.value = result;
    resultado.value = result
}

function multi(){
    result = (firstNum * secondNum);
    result.value = result;
    resultado.value = result
}

function division(){
    if(secondNum != 0){
        result = (firstNum / secondNum);
        result.value = result;
        resultado.value = result
    }
    else{
        alert('asdads');
    }

}