const randomArray = [];
const numberOfNumbers = 5;
const maxNumber = 100;
const time = 30 * 1000;

let randomNumber;
for(let i = 0; i < numberOfNumbers; i++){
    do{ 
        randomNumber = Math.floor(Math.random() * maxNumber + 1);
    }while(randomArray.includes(randomNumber));
        alert(randomNumber);
        randomArray.push(randomNumber);
}

const userArray = [];
setTimeout(remebered,time);

function remebered(){
    for(let i = 0; i < numberOfNumbers; i++){
        let el;
        el = parseInt(prompt("inserire il numero che ti ricordi"));
        if(!(userArray.includes(el))){
            userArray.push(el);
        }
    }
    verified(userArray,randomArray);
}

function verified(userArray,randomArray){
    const verifiedArray = [];
    for(let i = 0; i < numberOfNumbers; i++){
        if(randomArray.includes(userArray[i])){
            verifiedArray.push(userArray[i]);
        }
    }
    alert(`Hai indovinato ${verifiedArray.length} numeri, ovvero: ${verifiedArray}`)
}