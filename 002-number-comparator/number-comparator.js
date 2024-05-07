const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const compareButton = document.getElementById('compare');

function setResultText(text){
    result.innerText=text;
}


compareButton.addEventListener('click', function compare(){

    const number1 =number1Input.value;
    const number2=number2Input.value;


    if(number1===number2){
        setResultText('Equal')
    }
     else if(number1<number2){
        setResultText('number 1 is less than number 2');
       }
    else{
        setResultText('number 1 is greater than number 2');
    }
}
);


