
var newLine = true;
var value1 , value2;
var currentOperator;

function digitBtnPressed(button){
    if(document.getElementById("inputBox").value == 0 || newLine ){
        document.getElementById("inputBox").value = button;
        newLine = false;
    }
    else{
        document.getElementById("inputBox").value = document.getElementById("inputBox").value + button;
    } 
}

function btnACpressed(){
    document.getElementById("inputBox").value = 0;
}

function operatorBtnPressed(operator){
    currentOperator = operator;
    value1 = parseInt(document.getElementById("inputBox").value);
    newLine = true;
}

function equalsBtnPressed(){
    var value2 = parseInt(document.getElementById("inputBox").value);
    var finalTotal;

    switch(currentOperator){
        case "+":
            finalTotal = value1 + value2;
            break;
        case "-":
            finalTotal = value1 - value2;
            break;
        case "*":
            finalTotal = value1 * value2;
            break;
        case "/":
            finalTotal = value1 / value2;
            break;
    }
    document.getElementById("inputBox").value = finalTotal;
    value1 = 0;
    newLine = true;

}
