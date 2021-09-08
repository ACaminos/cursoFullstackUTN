function clear(){
    document.getElementById("firstNum").value = '';
    document.getElementById("secondNum").value= '';
    document.getElementById("resultado").value= '';
}
function disabled(){
    document.getElementById("btnSuma").disabled=true;
    document.getElementById("btnResta").disabled=true;
    document.getElementById("btnMulti").disabled=true;
    document.getElementById("btnDiv").disabled=true;
}
function enabled(){
    document.getElementById("btnSuma").disabled=false;
    document.getElementById("btnResta").disabled=false;
    document.getElementById("btnMulti").disabled=false;
    document.getElementById("btnDiv").disabled=false;
    clear();    
}

function suma(){
    firstNum = parseInt(document.getElementById("firstNum").value);
    secondNum = parseInt(document.getElementById("secondNum").value);
    document.getElementById("resultado").value = firstNum+secondNum;
    disabled();
}

function resta(){
    firstNum = parseInt(document.getElementById("firstNum").value);
    secondNum = parseInt(document.getElementById("secondNum").value);
    document.getElementById("resultado").value = firstNum-secondNum;
    disabled();
}

function multi(){
    firstNum = parseInt(document.getElementById("firstNum").value);
    secondNum = parseInt(document.getElementById("secondNum").value);
    document.getElementById("resultado").value = firstNum*secondNum;
    disabled();
}

function division(){
    firstNum = parseInt(document.getElementById("firstNum").value);
    secondNum = parseInt(document.getElementById("secondNum").value);
    if(secondNum != 0){
        result = (firstNum / secondNum);
        document.getElementById("resultado").value = firstNum/secondNum;
        disabled();
    }
    else{
        document.getElementById("resultado").value = "Error, vuelva a intentar"
        disabled();
    }

}