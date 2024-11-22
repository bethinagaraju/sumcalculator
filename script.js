



function sum(){
    let num1 = document.getElementById('1');
    let num2 = document.getElementById('2');
    
    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);

    let sum = n1+n2;

    let res = document.getElementById('ans');

    let btn = document.getElementById('btn');

    res.innerHTML = sum;


}