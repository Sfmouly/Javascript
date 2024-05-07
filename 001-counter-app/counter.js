let count = 0;
let i = count;

const displayElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');



function increaseCount() {
  if (count + 1 > 10) {
    alert('Count is too big!!!');
    return;
  }

  count += 1;
  displayElement.innerText = count;
  // if (count + 1 <= 10) {
  //   count += 1;
  //   displayElement.innerText = count;
  // }
  // else {
  //   alert('Count is too big!!!')
  // }
}


function decreaseCount() {
  if (count - 1 < 0) {
    alert('Count can not negetive!!!')
  }
  else {
    count -= 1;
    displayElement.innerText = count;
  }

}

incrementButton.addEventListener('click', increaseCount);
decrementButton.addEventListener('click', decreaseCount);
