const userInput = prompt ("Welcome to visit our froyo shop! Choose your flavor that you want to order ", 
                        "vanilla,vanilla,strawberry,coffee,coffee ");
//const userInput = "vanilla,vanilla,strawberry,coffee,coffee";

const objOrderList = {};

const arrUserInput = userInput.split(',');

const numToString = {
    1: 'ONE',
    2: 'TWO',
    3: 'THREE',
    4: 'FOUR',
    5: 'FIVE',
    6: 'SIX',
    7: 'SEVEN',
    8: 'EIGHT',
    9: 'NINE',
    10: 'TEN'
}

for(let i=0; i<arrUserInput.length; i++){
    arrUserInput[i] = arrUserInput[i].replace(/\s+/g, '');
    arrUserInput[i] = arrUserInput[i].toUpperCase();
}

// for(const check of arrUserInput){

//     if(objOrderList[check]) objOrderList[check]++;
//     else objOrderList[check] = 1;
// }

for(const check of arrUserInput){

    if(check in objOrderList) objOrderList[check]++;
    else objOrderList[check] = 1;
}


console.log("Here is the list that you ordered :");

for(let consoleResult in objOrderList){
    let strOrderListConsole = "";
    strOrderListConsole += numToString[objOrderList[consoleResult]] + ' _ ';
    strOrderListConsole += consoleResult;
    console.log(strOrderListConsole);
}


let strOrderList = "Here is the list that you ordered : <br><br>";

for(let read in objOrderList){
    //strOrderList += objOrderList[read];
    strOrderList += numToString[objOrderList[read]] + ' _ ';
    strOrderList += ' ';
    strOrderList += read;
    strOrderList += '<br>';
}

const resultDiv = document.getElementById("result");
resultDiv.innerHTML = strOrderList;
























// const inputArray = userInput.split(",");

// const count = {};

// for(const element of inputArray){
//     console.log(element);
//     if(count[element]) count[element]++;
//     else count[element] = 1;
// }

