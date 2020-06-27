

// GUI CALCULATOR //

function getInputNumber(num){

    var answer = document.getElementById("inp");
    answer.value += num;
}

function clearInp(){

    var answer = document.getElementById("inp");
    answer.value = "";
}

function getAnswer(){

    var answer = document.getElementById("inp");
    answer.value = eval(answer.value);
}