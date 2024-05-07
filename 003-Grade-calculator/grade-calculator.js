const markinput = document.getElementById('marks');
const calculateButton = document.getElementById('calculate');



function calculate() {

    // if (markinput.value ===''){
    //     markinput.style.border='1px solid red';
    //     result.innerHTML = '<h1>No Input</h1>';
    //     return;
    // }


    const mark = markinput.value;
    if (mark >= 0 && mark <= 100) {
        if (mark >= 80) {
            result.innerHTML = '<h1>A+</h1>';
        }
        else if (mark >= 75) {
            result.innerHTML = '<h1>A</h1>';
        }
        else if (mark >= 70) {
            result.innerHTML = '<h1>A-</h1>';
        }
        else if (mark >= 65) {
            result.innerHTML = '<h1>B+</h1>';
        }
        else if (mark >= 60) {
            result.innerHTML = '<h1>B</h1>';
        }
        else if (mark >= 55) {
            result.innerHTML = '<h1>B-</h1>';
        }
        else if (mark >= 50) {
            result.innerHTML = '<h1>C+</h1>';
        }
        else if (mark >= 45) {
            result.innerHTML = '<h1>C</h1>';
        }
        else if (mark >= 40) {
            result.innerHTML = '<h1>D</h1>';
        }
        else {
            result.innerHTML = '<h1>F</h1>';
        }
    } else {
        alert("You give a wrong input!!!");
    }
}

calculateButton.addEventListener('click', calculate);